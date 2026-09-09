# Legal copy (drafted, needs Sam's review)

Plain English, UK GDPR, ICO Children's Code aware. Sam must read both before launch. Replace every [BRACKET].
Put these in `site.ts` as `legal.privacy.sections` and `legal.terms.sections`, each `{ h, p }`, so the shared text page template renders both with a table of contents.

## /privacy: Privacy notice

**Who I am.** Growing Minds Tutoring is run by [FULL NAME], a self employed qualified teacher based in Portsmouth. I am the data controller for the information described here. You can reach me at hello@growingmindstutoring.co or on 07921 080947.

**What I collect.** From the enquiry form: your name, email address, optional phone number, your child's year group, the subjects and session type you are interested in, and your message. Once tutoring starts: your child's first name and my session notes. Please do not send me anything more than that. I do not collect dates of birth, medical records or school reports unless you choose to share something relevant, in which case I keep only what I need.

**Why I collect it, and my lawful basis.** To reply to your enquiry and to deliver tutoring. My lawful basis is legitimate interests for responding to an enquiry, and contract for delivering sessions you have booked. Recordings rely on your consent, which is separate and optional.

**Children's data.** My pupils are under 13, so the ICO Children's Code applies and I keep collection to the minimum described above. There is no profiling, no advertising and no sharing with third parties for their own purposes.

**Recordings.** Sessions are only recorded with your written consent. By default I record the whiteboard and my voice, not video of your child. Recordings are stored in the UK or EU, shared only with your family through a link that can be revoked, and deleted after 12 months or when tutoring ends.

**How long I keep things.** Enquiries that do not lead to tutoring are deleted within six months. Pupil records and session notes are deleted 12 months after tutoring ends. Invoices are kept for six years because HMRC requires it.

**Who else sees it.** Only the services that run the website and my email: the enquiry form provider, my email provider and, if you book a call, the booking tool. Each processes data on my instructions only. No one buys or receives your details for marketing.

**Your rights.** You can ask me for a copy of what I hold, ask me to correct or delete it, or withdraw consent for recordings at any time. Email me and I will respond within one month. If you are not happy with how I have handled it you can complain to the Information Commissioner's Office at ico.org.uk.

> Check before launch: the named sub processors above must match what is actually deployed (Resend, Cloudflare Turnstile, Vercel, Cal.com, Google Workspace). Region settings on Drive, R2 and Supabase must be UK or EU if any of them are ever used.

## /terms: Tutoring terms

1. **Booking a session.** Sessions are agreed directly between us, by message, email or phone. A regular weekly slot is held for your child as long as sessions continue. There is no contract and no minimum commitment.
2. **Payment.** Payment is by bank transfer, either after each session or in advance for a block of six. Details are on the invoice I send. Blocks are valid for [X] weeks from the first session.
3. **Cancellations.** Please give 24 hours notice where you can and there is nothing to pay. Cancellations inside 24 hours are charged in full, because the slot cannot be filled. If your child is unwell, tell me and we will rearrange, no charge. If I have to cancel, the session is rescheduled or refunded.
4. **Face to face sessions.** For sessions at your home, a parent or carer must be in the property throughout. I do not transport children under any circumstances. For sessions at my home, you are welcome to stay and the address is shared once we have spoken.
5. **Safeguarding.** I hold an Enhanced DBS certificate on the Update Service and follow the safeguarding practice expected of a qualified teacher. If I ever have a concern about a child's welfare I have a duty to raise it with the appropriate local authority service, and I would normally discuss it with you first.
6. **Recordings.** Nothing is recorded without your written consent, which you can withdraw at any time without affecting the tutoring. Recordings are whiteboard and audio by default, shared only with your family through a link I can revoke, and deleted after 12 months or at the end of tutoring, whichever comes first.
7. **Progress.** I will be honest about progress, including when I think tutoring is no longer needed or when your child would be better served by a specialist. I cannot guarantee a particular outcome, level or test result.

## Recording consent form (one page, print, not a web route)

Needed before any session is recorded. Derived from the notice above: child's first name and year group, parent name and signature, date, tick boxes for "whiteboard and audio clips: yes / no" and "full session video: yes / no", the retention period, and a line saying consent can be withdrawn at any time without affecting the tutoring.
