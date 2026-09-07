"use client";

import { useActionState, useState } from "react";
import { Check } from "lucide-react";
import Link from "next/link";
import { site } from "@/content/site";
import { submitEnquiry, type EnquiryState } from "@/app/contact/actions";
import { Turnstile } from "./Turnstile";

const initialState: EnquiryState = { status: "idle" };

const inputBase =
  "w-full rounded-[11px] border-[1.5px] bg-field px-3.5 py-3 text-[16px] text-ink outline-none";

export function ContactForm() {
  const isWaitlist = site.status === "waitlist";
  const copy = isWaitlist ? site.form.waitlist : site.form.accepting;

  const [state, formAction, isPending] = useActionState(
    submitEnquiry,
    initialState,
  );
  const [subjects, setSubjects] = useState<string[]>([]);
  const [mode, setMode] = useState<string>("");
  const [consent, setConsent] = useState(false);

  const errors = state.errors ?? {};

  if (state.status === "success") {
    return (
      <div className="rounded-[var(--radius-card)] border border-line bg-white p-[30px] shadow-[0_2px_14px_rgba(27,74,44,.05)]">
        <div className="mb-4 flex h-[54px] w-[54px] items-center justify-center rounded-full bg-leaf text-white">
          <Check size={26} strokeWidth={3} aria-hidden />
        </div>
        <h2 className="font-display m-0 mb-2.5 text-[26px] font-semibold text-deep">
          {site.form.success.title}
        </h2>
        <p className="m-0 mb-[18px] text-[16.5px] leading-[1.7] text-body-soft">
          {site.form.success.lead}
        </p>
        <div className="flex flex-wrap gap-2.5">
          <a
            href={site.business.phoneHref}
            className="min-h-[44px] rounded-full bg-deep px-[22px] py-3 text-[15.5px] font-extrabold text-white no-underline hover:bg-deep-press"
          >
            Call {site.business.phone}
          </a>
        </div>
      </div>
    );
  }

  const toggleSubject = (label: string) =>
    setSubjects((cur) =>
      cur.includes(label) ? cur.filter((x) => x !== label) : [...cur, label],
    );

  return (
    <form
      action={formAction}
      className="rounded-[var(--radius-card)] border border-line bg-white p-[30px] shadow-[0_2px_14px_rgba(27,74,44,.05)]"
    >
      <h2 className="font-display m-0 mb-1 text-[24px] font-semibold text-deep">
        {copy.title}
      </h2>
      <p className="mb-[22px] text-[15.5px] leading-[1.6] text-body-soft">
        {copy.lead}
      </p>

      <div className="grid gap-4">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
          <div>
            <label
              htmlFor="gm-name"
              className="mb-1.5 block text-[14.5px] font-extrabold text-deep"
            >
              Your name
            </label>
            <input
              id="gm-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Jo Bloggs"
              className={`${inputBase} border-field-border`}
            />
          </div>
          <div>
            <label
              htmlFor="gm-email"
              className="mb-1.5 block text-[14.5px] font-extrabold text-deep"
            >
              Email
            </label>
            <input
              id="gm-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="jo@example.com"
              aria-invalid={!!errors.email}
              className={`${inputBase} ${errors.email ? "border-error" : "border-field-border"}`}
            />
            {errors.email && (
              <div className="mt-1.5 text-[13.5px] font-bold text-error">
                {errors.email}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
          <div>
            <label
              htmlFor="gm-phone"
              className="mb-1.5 block text-[14.5px] font-extrabold text-deep"
            >
              Phone{" "}
              <span className="font-semibold text-muted">(optional)</span>
            </label>
            <input
              id="gm-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="07000 000000"
              className={`${inputBase} border-field-border`}
            />
          </div>
          <div>
            <label
              htmlFor="gm-year"
              className="mb-1.5 block text-[14.5px] font-extrabold text-deep"
            >
              Child&rsquo;s year group
            </label>
            <select
              id="gm-year"
              name="yearGroup"
              defaultValue={site.form.yearGroups[0]}
              className={`${inputBase} border-field-border`}
            >
              {site.form.yearGroups.map((y) => (
                <option key={y}>{y}</option>
              ))}
            </select>
          </div>
        </div>

        <fieldset className="m-0 border-0 p-0">
          <legend className="mb-2 text-[14.5px] font-extrabold text-deep">
            Subjects you are interested in
          </legend>
          <div className="flex flex-wrap gap-2">
            {site.subjects.map((s) => {
              const on = subjects.includes(s.title);
              return (
                <button
                  key={s.slug}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggleSubject(s.title)}
                  className={`min-h-[44px] rounded-full border-[1.5px] px-4 py-2.5 text-[15px] font-bold transition-colors ${
                    on
                      ? "border-leaf bg-leaf text-white"
                      : "border-field-border bg-white text-[#33453a]"
                  }`}
                >
                  {s.title}
                </button>
              );
            })}
          </div>
          {subjects.map((s) => (
            <input key={s} type="hidden" name="subjects" value={s} />
          ))}
        </fieldset>

        <fieldset className="m-0 border-0 p-0">
          <legend className="mb-2 text-[14.5px] font-extrabold text-deep">
            Where would you like sessions?
          </legend>
          <div className="flex flex-wrap gap-2">
            {site.form.modeOptions.map((m) => {
              const on = mode === m.id;
              return (
                <button
                  key={m.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setMode(m.id)}
                  className={`min-h-[44px] rounded-full border-[1.5px] px-4 py-2.5 text-[15px] font-bold transition-colors ${
                    on
                      ? "border-leaf bg-leaf text-white"
                      : "border-field-border bg-white text-[#33453a]"
                  }`}
                >
                  {m.label}
                </button>
              );
            })}
          </div>
          {mode && <input type="hidden" name="mode" value={mode} />}
        </fieldset>

        <div>
          <label
            htmlFor="gm-msg"
            className="mb-1.5 block text-[14.5px] font-extrabold text-deep"
          >
            How can I help?
          </label>
          <textarea
            id="gm-msg"
            name="message"
            rows={4}
            placeholder="A sentence or two about how your child is getting on and what you would like help with."
            aria-invalid={!!errors.message}
            className={`${inputBase} resize-y leading-[1.55] ${errors.message ? "border-error" : "border-field-border"}`}
          />
          {errors.message ? (
            <div className="mt-1.5 text-[13.5px] font-bold text-error">
              {errors.message}
            </div>
          ) : (
            <div className="mt-1.5 text-[13.5px] text-muted">
              {site.form.childDataHint}
            </div>
          )}
        </div>

        <button
          type="button"
          aria-pressed={consent}
          onClick={() => setConsent((v) => !v)}
          className={`flex items-start gap-3 rounded-[12px] border-[1.5px] bg-[#f7faf4] p-4 text-left ${
            errors.consent ? "border-error" : "border-sage"
          }`}
        >
          <span
            className={`mt-px flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded-[6px] border-2 border-leaf text-white ${
              consent ? "bg-leaf" : "bg-transparent"
            }`}
          >
            {consent && <Check size={13} strokeWidth={3} aria-hidden />}
          </span>
          <span className="text-[14.5px] leading-[1.55] text-body">
            I am happy for Sam to use these details to reply to my enquiry, as
            described in the{" "}
            <Link href="/privacy" className="underline">
              privacy notice
            </Link>
            .
          </span>
        </button>
        {consent && <input type="hidden" name="consent" value="on" />}
        {errors.consent && (
          <div className="text-[13.5px] font-bold text-error">
            {errors.consent}
          </div>
        )}

        <Turnstile />

        {errors.form && (
          <div
            role="alert"
            className="rounded-[11px] border border-error/40 bg-error/5 px-4 py-3 text-[14.5px] font-bold text-error"
          >
            {errors.form}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3.5">
          <button
            type="submit"
            disabled={isPending}
            className="flex min-h-[44px] items-center gap-2.5 rounded-full bg-deep px-7 py-3.5 text-[16.5px] font-extrabold text-white transition-colors hover:bg-deep-press disabled:opacity-80"
          >
            {isPending && (
              <span
                aria-hidden
                className="h-4 w-4 rounded-full border-[2.5px] border-white/35 border-t-white"
                style={{ animation: "gmspin .7s linear infinite" }}
              />
            )}
            <span>{isPending ? "Sending" : copy.submit}</span>
          </button>
          <div className="text-[13.5px] leading-[1.5] text-muted">
            Protected by an invisible spam check.
            <br />
            No cookies, no marketing lists.
          </div>
        </div>
      </div>
    </form>
  );
}
