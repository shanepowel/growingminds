# Prompts to paste, in order

Repo root must contain `CLAUDE.md` and the `handoff/` folder before session 1. One Claude Code session per step, fresh context each time, commit at the end of each. Then move to Cursor for the visual polish list at the bottom.

---

## Session 1: scaffold, tokens, component library

> Create a Next.js 15 App Router project in TypeScript with Tailwind v4 and shadcn/ui (button, input, textarea, select, checkbox, accordion, dialog, toast only). Read CLAUDE.md and handoff/README.md. Copy handoff/globals.css to app/globals.css **unchanged** and handoff/components/ to components/ **unchanged**, then copy handoff/site.ts to content/site.ts unchanged. Load Source Serif 4, Nunito and Caveat via next/font and bind them to --font-display, --font-body and --font-script in the @theme block. Install lucide-react. Do not author any new CSS, do not rename or re-derive tokens, and do not rebuild the primitives: everything the site needs already exists as .tsx in that folder. Read handoff/components/README.md for the rules. Do not build pages yet.
>
> Acceptance: /dev/components renders every component from handoff/components in every state. globals.css is byte-identical to the handoff copy apart from the three font bindings. Lint clean.

## Session 2: layout shell

> Build the root layout from handoff/Growing Minds Tutoring.dc.html by composing SiteHeader, StatusBanner and SiteFooter from components/. The header is two rows: a sage trust strip carrying the credential line and the Facebook link (not sticky), then one sticky bar with the leaf lockup left, the four item nav centre, and the tap-to-call pill plus the Pupil Area sign in right. The footer is warm paper, not dark green: leaf lockup and tagline row, Explore, The small print, Safeguarding, then the full width Portsmouth area chips from site.business.areasCovered, then the bottom bar with the DBS line. The CTA band above it is the one dark band. Status banner driven by site.status. Add metadata defaults, favicon, and the Open Graph image route from the flyer artwork in /public/brand. Hide /pupil-area from the nav when site.pupilArea.enabled is false.
>
> Acceptance: matches the reference at 390, 768 and 1280. All three site.status states render correctly. Lighthouse accessibility 100 on an empty page.

## Session 3: pages, part one

> Build /, /about and /tutoring (subjects plus the merged how a session works block) from handoff/Growing Minds Tutoring.dc.html, using only session 1 components and content from content/site.ts. Home uses the Hero and TrustBar components as they are: serif sentence-case h1 with the peach blob bleeding off the lower left, blob-masked photo right, Caveat note under the buttons, sage trust bar directly below. Images via next/image from /public/brand with the alt text in site.ts. No hard coded copy in page files.
>
> Acceptance: pages match the reference, every string traces to site.ts, no layout shift on image load.

## Session 4: enquiry form and email

> Build /contact from the reference. Server action with Zod validation, Cloudflare Turnstile verification, and Resend sending two emails: a notification to Sam with reply-to set to the parent, and a plain text auto-reply to the parent. Field set and copy variants are in site.form. Honour site.status: waitlist swaps title, lead and submit label; paused hides the form and shows the holding message. Simple in-memory IP rate limit. Cal.com embed behind site.booking.enabled. Env vars documented in .env.example. Do not build the monospace "form state preview" strip from the reference, it is a review affordance.
>
> Acceptance: both emails send in Resend test mode. Invalid submissions show inline errors on the offending field. Turnstile failure degrades gracefully and still shows the phone and Facebook fallbacks.

## Session 5: remaining pages, pupil area, legal

> Build /pricing, /faqs, /tutoring-portsmouth, /pupil-area, /policies (privacy and terms tabbed on one route) and the 404 page. FAQs render from site.faqs and emit FAQPage JSON-LD. /pupil-area is signposting only, three outbound links from site.pupilArea.links, no authentication anywhere on this site. Privacy and terms use one shared text page template with a sticky table of contents, content from handoff/legal-copy.md moved into site.ts.
>
> Acceptance: legal pages readable on mobile, data position matches CLAUDE.md exactly, no auth code anywhere in the repo.

## Session 6: SEO layer

> Add per-page metadata, canonical URLs, sitemap.ts and robots.ts, and JSON-LD: LocalBusiness as a service area business with no street address, areaServed from site.business.areasCovered, priceRange and sameAs the Facebook page; Person for Sam on /about; FAQPage on /faqs. Portsmouth must appear naturally in the headings of /tutoring-portsmouth.
>
> Acceptance: sitemap lists all 9 routes, JSON-LD validates in the Rich Results test, Lighthouse SEO 100.

## Session 7: deploy

> Create the Vercel project, set env vars, connect the GitHub repo, add growingmindstutoring.co.uk and redirect the .uk. Write README-for-sam.md: how to edit content/site.ts in GitHub's web editor, what the status flag does, and how to swap a testimonial.
>
> Acceptance: production URL live on HTTPS, preview deploys on PRs, Sam has made one edit herself and seen it deploy.

---

## Cursor polish list

- Spacing and rhythm against the reference, page by page. Any fix goes in globals.css as a token change, never as a one-off style on a page
- Micro-interactions: hover states, accordion easing, focus rings, button press
- Image crops, warm colour grade, WebP, hero under 150KB
- Copy pass: read every page aloud as a parent. Nothing that sounds like a company. No em dashes
- Empty and edge states: no testimonials yet, no pricing yet, status paused, pupil area disabled
- Replace every [PLACEHOLDER] with Sam's real data
- Lighthouse mobile 95+, worst offender first
- Keyboard through the whole site, screen reader labels on the form, contrast on the green buttons
- Enquiry flow end to end with real emails on the live domain

## Still needed from Sam before launch

Logo and mascot vector · photo of her and the tutoring space · Facebook page URL · price, session length, block price · travel radius and fee · phonics scheme · two or three parent quotes with written permission · her own "why I tutor" paragraph · her own safeguarding wording · full name for the privacy notice · confirmation the domain is bought.
