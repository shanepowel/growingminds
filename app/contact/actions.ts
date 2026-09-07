"use server";

import { headers } from "next/headers";
import { z } from "zod";
import { Resend } from "resend";
import { site } from "@/content/site";

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "message" | "consent" | "form", string>>;
};

const yearGroups = site.form.yearGroups as readonly string[];
const modeIds = site.form.modeOptions.map((m) => m.id) as readonly string[];

const schema = z.object({
  name: z.string().trim().min(2, "Please tell me your name."),
  email: z.string().trim().email("Please enter an email address I can reply to."),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  yearGroup: z.string().refine((v) => yearGroups.includes(v), "Please choose a year group."),
  subjects: z.array(z.string()).default([]),
  mode: z.string().refine((v) => modeIds.includes(v), "Please choose where you would like sessions.").optional(),
  message: z.string().trim().min(5, "A sentence about how I can help is all I need."),
  consent: z
    .string()
    .refine((v) => v === "on", "Please tick the box so I know I can reply."),
});

// Simple in-memory, per-IP rate limit. Good enough for a low-traffic brochure
// site; swap for Vercel KV if it is ever abused.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

async function verifyTurnstile(token: string | undefined, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  // No secret configured (local/dev) → skip verification so the form still works.
  if (!secret) return true;
  if (!token) return false;
  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret, response: token, remoteip: ip }),
      },
    );
    const data = (await res.json()) as { success: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

async function sendEmails(data: {
  name: string;
  email: string;
  phone?: string;
  yearGroup: string;
  subjects: string[];
  mode?: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  // No key configured (local/dev) → log instead of failing, so the flow is testable.
  if (!apiKey) {
    console.info("[enquiry] Resend not configured; enquiry received:", {
      ...data,
      email: data.email,
    });
    return;
  }

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_TO_EMAIL || site.business.email;
  const from =
    process.env.RESEND_FROM ||
    `Growing Minds Tutoring <hello@${site.business.domain}>`;
  const subjects = data.subjects.length ? data.subjects.join(", ") : "Not specified";
  const modeLabel =
    site.form.modeOptions.find((m) => m.id === data.mode)?.label ?? "Not specified";

  // Notification to Sam, reply-to set to the parent.
  await resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject: `New enquiry from ${data.name}`,
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "Not given"}`,
      `Year group: ${data.yearGroup}`,
      `Subjects: ${subjects}`,
      `Preferred sessions: ${modeLabel}`,
      "",
      "Message:",
      data.message,
    ].join("\n"),
  });

  // Short auto-reply to the parent.
  await resend.emails.send({
    from,
    to: data.email,
    subject: "Thank you for your enquiry — Growing Minds Tutoring",
    text: [
      `Hi ${data.name},`,
      "",
      "Thank you for getting in touch about tutoring. I have received your enquiry and will reply within one working day.",
      "",
      `If you would rather not wait, you can call me on ${site.business.phone} or message the Growing Minds Tutoring page on Facebook.`,
      "",
      "Best wishes,",
      "Sam",
      "Growing Minds Tutoring",
    ].join("\n"),
  });
}

export async function submitEnquiry(
  _prev: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  if (site.status === "paused") {
    return { status: "error", errors: { form: "Enquiries are closed for now." } };
  }

  const hdrs = await headers();
  const ip =
    hdrs.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    hdrs.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return {
      status: "error",
      errors: {
        form: "That is a few enquiries in a short time. Please try again shortly, or call me instead.",
      },
    };
  }

  const parsed = schema.safeParse({
    name: formData.get("name") ?? "",
    email: formData.get("email") ?? "",
    phone: formData.get("phone") ?? "",
    yearGroup: formData.get("yearGroup") ?? "",
    subjects: formData.getAll("subjects").map(String),
    mode: formData.get("mode") ?? undefined,
    message: formData.get("message") ?? "",
    consent: formData.get("consent") ?? "",
  });

  if (!parsed.success) {
    const errors: EnquiryState["errors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (key === "name" || key === "email" || key === "message" || key === "consent") {
        errors[key] = issue.message;
      } else {
        errors.form = errors.form ?? issue.message;
      }
    }
    return { status: "error", errors };
  }

  const token = formData.get("cf-turnstile-response");
  const ok = await verifyTurnstile(
    typeof token === "string" ? token : undefined,
    ip,
  );
  if (!ok) {
    return {
      status: "error",
      errors: {
        form: "The spam check did not pass. Please refresh and try again, or call me instead.",
      },
    };
  }

  try {
    await sendEmails({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone || undefined,
      yearGroup: parsed.data.yearGroup,
      subjects: parsed.data.subjects,
      mode: parsed.data.mode,
      message: parsed.data.message,
    });
  } catch (err) {
    console.error("[enquiry] failed to send", err);
    return {
      status: "error",
      errors: {
        form: "Something went wrong sending your enquiry. Please call or message me on Facebook instead.",
      },
    };
  }

  return { status: "success" };
}
