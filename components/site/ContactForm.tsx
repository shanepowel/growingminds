"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import Link from "next/link";
import { site } from "@/content/site";
import { facebookHref } from "@/lib/content";
import { submitEnquiry, type EnquiryState } from "@/app/contact/actions";
import { Turnstile } from "./Turnstile";
import { Chip } from "@/components/Chip";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const initialState: EnquiryState = { status: "idle" };

export function ContactForm({ defaultMessage }: { defaultMessage?: string }) {
  const isWaitlist = site.status === "waitlist";
  const copy = isWaitlist ? site.form.waitlist : site.form.accepting;

  const [state, formAction, isPending] = useActionState(submitEnquiry, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  // React 19 fires a form reset after the server action. Radix Checkbox
  // treats that reset as "back to unchecked", so a ticked consent box would
  // clear whenever another field failed. These fields are controlled, so
  // the browser reset is not needed.
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    const keepControlledValues = (event: Event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
    };
    form.addEventListener("reset", keepControlledValues, true);
    return () => form.removeEventListener("reset", keepControlledValues, true);
  }, []);
  const [subjects, setSubjects] = useState<string[]>([]);
  const [mode, setMode] = useState<string>("");
  const [consent, setConsent] = useState(false);
  // Controlled, so a validation error does not wipe what the parent typed
  // (React 19 resets uncontrolled fields after a form action).
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    yearGroup: site.form.yearGroups[0] as string,
    message: defaultMessage ?? "",
  });
  const bind = (key: keyof typeof fields) => ({
    value: fields[key],
    onChange: (e: { target: { value: string } }) => setFields((f) => ({ ...f, [key]: e.target.value })),
  });

  const errors = state.errors ?? {};

  if (state.status === "success") {
    return (
      <div className="gm-card">
        <div
          aria-hidden
          style={{ width: 54, height: 54, borderRadius: "50%", background: "var(--color-green)", color: "#fff", display: "grid", placeItems: "center", marginBottom: 16 }}
        >
          <Check size={26} strokeWidth={3} />
        </div>
        <h2 style={{ fontSize: 26, margin: "0 0 10px" }}>{site.form.success.title}</h2>
        <p style={{ margin: "0 0 18px", fontSize: "16.5px", lineHeight: 1.7, color: "var(--color-body)" }}>
          {site.form.success.lead}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          <a href={`mailto:${site.business.email}`} className="gm-btn gm-btn-primary">
            Email me
          </a>
          <a href={facebookHref()} target="_blank" rel="noreferrer" className="gm-btn gm-btn-secondary">
            Message on Facebook
          </a>
        </div>
      </div>
    );
  }

  const toggleSubject = (label: string) =>
    setSubjects((cur) => (cur.includes(label) ? cur.filter((x) => x !== label) : [...cur, label]));

  return (
    <form ref={formRef} action={formAction} className="gm-card">
      <h2 style={{ fontSize: 24, margin: "0 0 4px" }}>{copy.title}</h2>
      <p style={{ margin: "0 0 22px", fontSize: "15.5px", lineHeight: 1.6, color: "var(--color-body)" }}>{copy.lead}</p>

      <FieldGroup>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
          <Field data-invalid={errors.name ? true : undefined}>
            <FieldLabel htmlFor="gm-name">Your name</FieldLabel>
            <Input
              id="gm-name"
              name="name"
              {...bind("name")}
              type="text"
              autoComplete="name"
              placeholder="Jo Bloggs"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "gm-name-error" : undefined}
            />
            {errors.name && <FieldError id="gm-name-error">{errors.name}</FieldError>}
          </Field>
          <Field data-invalid={errors.email ? true : undefined}>
            <FieldLabel htmlFor="gm-email">Email</FieldLabel>
            <Input
              id="gm-email"
              name="email"
              {...bind("email")}
              type="email"
              autoComplete="email"
              placeholder="jo@example.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "gm-email-error" : undefined}
            />
            {errors.email && <FieldError id="gm-email-error">{errors.email}</FieldError>}
          </Field>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
          <Field>
            <FieldLabel htmlFor="gm-phone">
              Phone <span className="font-semibold text-muted">(optional)</span>
            </FieldLabel>
            <Input id="gm-phone" name="phone" {...bind("phone")} type="tel" autoComplete="tel" placeholder="07000 000000" />
          </Field>
          <Field>
            <FieldLabel htmlFor="gm-year">Child&rsquo;s year group</FieldLabel>
            <NativeSelect id="gm-year" name="yearGroup" {...bind("yearGroup")}>
              {site.form.yearGroups.map((y) => (
                <NativeSelectOption key={y}>{y}</NativeSelectOption>
              ))}
            </NativeSelect>
          </Field>
        </div>

        <FieldSet>
          <FieldLegend variant="label">Subjects you are interested in</FieldLegend>
          <div className="flex flex-wrap gap-2">
            {site.subjects.map((s) => (
              <Chip key={s.slug} label={s.title} selected={subjects.includes(s.title)} onToggle={() => toggleSubject(s.title)} />
            ))}
          </div>
          {subjects.map((s) => (
            <input key={s} type="hidden" name="subjects" value={s} />
          ))}
        </FieldSet>

        <FieldSet>
          <FieldLegend variant="label">Where would you like sessions?</FieldLegend>
          <div className="flex flex-wrap gap-2">
            {site.form.modeOptions.map((m) => (
              <Chip key={m.id} label={m.label} selected={mode === m.id} onToggle={() => setMode(m.id)} />
            ))}
          </div>
          {mode && <input type="hidden" name="mode" value={mode} />}
        </FieldSet>

        <Field data-invalid={errors.message ? true : undefined}>
          <FieldLabel htmlFor="gm-msg">How can I help?</FieldLabel>
          <Textarea
            id="gm-msg"
            name="message"
            rows={4}
            {...bind("message")}
            placeholder="A sentence or two about how your child is getting on and what you would like help with."
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "gm-msg-error" : "gm-msg-hint"}
          />
          {errors.message ? (
            <FieldError id="gm-msg-error">{errors.message}</FieldError>
          ) : (
            <FieldDescription id="gm-msg-hint">{site.form.childDataHint}</FieldDescription>
          )}
        </Field>

        <Field data-invalid={errors.consent ? true : undefined}>
          <FieldLabel
            htmlFor="gm-consent"
            className={cn(
              "mb-0 cursor-pointer items-start gap-3 rounded-[12px] border-[1.5px] bg-sage-pale p-3.5 font-normal",
              errors.consent ? "border-danger" : "border-sage-line",
            )}
          >
            <Checkbox
              id="gm-consent"
              checked={consent}
              onCheckedChange={(v) => setConsent(v === true)}
              aria-invalid={!!errors.consent}
              aria-describedby={errors.consent ? "gm-consent-error" : undefined}
              className="mt-px"
            />
            <span className="text-[14.5px] leading-[1.55] font-normal text-body-dark">
              I am happy for Sam to use these details to reply to my enquiry, as described in the{" "}
              <Link href="/policies?tab=privacy">privacy notice</Link>.
            </span>
          </FieldLabel>
          {consent && <input type="hidden" name="consent" value="on" />}
          {errors.consent && <FieldError id="gm-consent-error">{errors.consent}</FieldError>}
        </Field>

        <Turnstile />

        {errors.form && (
          <div
            role="alert"
            className="rounded-[11px] border border-danger/40 bg-danger/5 px-4 py-3 text-[14.5px] font-bold text-danger"
          >
            {errors.form}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3.5">
          <button type="submit" disabled={isPending} className="gm-btn gm-btn-primary" style={{ opacity: isPending ? 0.8 : 1 }}>
            <span>{isPending ? "Sending…" : copy.submit}</span>
          </button>
          <p className="m-0 text-[13.5px] leading-normal text-muted">
            Protected by an invisible spam check.
            <br />
            No cookies, no marketing lists.
          </p>
        </div>
      </FieldGroup>
    </form>
  );
}
