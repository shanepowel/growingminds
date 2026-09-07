# Build scope, v2

Rewritten against the signed-off Claude Design handoff. The design phase is done. This document is the Claude Code and Cursor plan for two apps in one repo, with the pupil app scaffold in launch scope. Supersedes `growing-minds-build-scope.md`.

```
handoff/ (done)  ->  Claude Code, 11 sessions  ->  Cursor polish  ->  Vercel x2
```

## 0. Cost sheet

| Item | Choice | Cost |
|---|---|---|
| Domain | growingmindstutoring.co.uk and .uk, Cloudflare Registrar | approx. £10 per year |
| DNS, SSL, hello@ forwarding, Turnstile | Cloudflare | £0 |
| Hosting, both apps | Vercel Hobby, two projects | £0 |
| Enquiry and session note emails | Resend free (3,000 per month) | £0 |
| Intro call booking | Cal.com free | £0 |
| Analytics | Vercel Web Analytics | £0 |
| Pupil app database, auth, storage | Supabase free, `eu-west-2` | £0 |
| Google sign in | Google Cloud OAuth client, Testing mode | £0 |
| Classroom, Meet | Google, personal Gmail | £0 |
| Whiteboard | Bitpaper free | £0 |
| Recording storage at launch | Google Drive, one folder per family | £0 |
| First paid upgrade | Bitpaper Pro, once three regular online pupils | approx. $8 per month |
| Second paid upgrade | Supabase Pro, only if free tier limits bite | $25 per month |
| Phase 2, when justified | Cloudflare R2 (10 GB free), LiveKit Cloud free tier, tldraw licence | £0 to modest |

Launch running cost about £10 a year.

## 1. Prerequisites, before session 1

- Repo `growing-minds` on GitHub with `CLAUDE.md` at the root and the `handoff/` folder committed unchanged.
- `docs/build-scope.md` (this file), `docs/pupil-app.md`, `supabase/migrations/0001_init.sql` committed.
- Supabase project created in **eu-west-2**, keys to hand.
- Google Cloud project with an OAuth client (web), redirect URI set to the Supabase callback, consent screen in Testing with Sam's email as a test user.
- Cloudflare: domain bought, Email Routing for hello@ and notes@, Turnstile site key.
- Resend: domain verified, API key.
- Two empty Vercel projects.
- Sam's Google account email.

## 2. Claude Code sessions

One session per step, fresh context, commit and push at the end of each. Every prompt starts with "Read CLAUDE.md and handoff/README.md" so the fidelity contract is in context.

### Session 1: monorepo, tokens, shared component library

> Read CLAUDE.md and handoff/README.md. Create a Turborepo with pnpm workspaces: apps/web and apps/pupils (both Next.js 15 App Router, TypeScript, Tailwind v4), packages/content, packages/ui, packages/db. In packages/ui translate handoff/design-tokens.md into a Tailwind v4 @theme block in globals.css, load Oswald, Nunito and Caveat via next/font/google with display swap, and build the component library the tokens file describes: three part header, status banner, trust tile, check list, dashed divider, subject card, mode card, testimonial card, pricing card, FAQ accordion, chip, form field, button variants, CTA band, footer. Use lucide-react. Copy handoff/site.ts to packages/content/site.ts, then add legal.privacy.sections and legal.terms.sections from handoff/legal-copy.md and pupilArea.appUrl and pupilArea.appEnabled. Add a /dev/components route in apps/web that renders every component in every state. Do not build pages.
>
> Acceptance: /dev/components matches design-tokens.md exactly at 390, 768 and 1280. Both apps build. Lint clean. No em dashes anywhere.

### Session 2: web layout shell

> Read CLAUDE.md and handoff/README.md. In apps/web build the root layout from handoff/Growing Minds Tutoring.dc.html: trust strip with the pupil sign in link (href from site.pupilArea.appUrl when appEnabled, otherwise the Classroom link), sticky brand and contact bar, four item nav, amber status banner driven by site.status, CTA band and footer with areas from site.business.areasCovered. Metadata defaults, favicon, OG image route from /public/brand/flyer.jpeg. Add the 301s listed in CLAUDE.md to next.config.
>
> Acceptance: matches the reference at all three widths. All three status states render. Lighthouse accessibility 100 on an empty page.

### Session 3: web pages, part one

> Read CLAUDE.md and handoff/README.md. Build /, /about and /tutoring (subjects, how a session works, #pricing anchor) using only packages/ui components and packages/content. Flyer split hero, playful density. Images via next/image from /public/brand with alt text from site.ts. No hard coded copy.
>
> Acceptance: pages match the reference, every string traces to site.ts, no layout shift on image load.

### Session 4: web contact form and email

> Read CLAUDE.md and handoff/README.md. Build /contact. Server action with Zod, Cloudflare Turnstile verification, Resend sending a notification to Sam with reply-to the parent and a plain text auto-reply. Copy variants from site.form. Honour site.status. In-memory IP rate limit. Cal.com embed behind site.booking.enabled. .env.example documented. Do not build the monospace form state preview strip.
>
> Acceptance: both emails send in Resend test mode. Inline errors on the offending field. Turnstile failure still shows phone and Facebook fallbacks.

### Session 5: web remaining pages

> Read CLAUDE.md and handoff/README.md. Build /faqs (FAQPage JSON-LD), /tutoring-portsmouth, /pupil-area, /policies (privacy and terms tabbed, shared text template with sticky table of contents, content from site.legal) and the 404 page. /pupil-area is signposting only: the sign in funnel and three link tiles from site.pupilArea, every sign in button pointing at site.pupilArea.appUrl. No authentication code in apps/web.
>
> Acceptance: legal pages readable on mobile. No auth code in apps/web. Every route in CLAUDE.md resolves.

### Session 6: web SEO layer

> Read CLAUDE.md. Per page metadata, canonical URLs, sitemap.ts, robots.ts. JSON-LD: LocalBusiness as a service area business with no street address, areaServed from site.business.areasCovered, priceRange, sameAs Facebook; Person on /about; FAQPage on /faqs. Portsmouth in the headings of /tutoring-portsmouth. Exclude /dev/components from the sitemap and block it in production.
>
> Acceptance: sitemap lists the 8 routes, JSON-LD validates in Rich Results, Lighthouse SEO 100.

### Session 7: database

> Read CLAUDE.md and docs/pupil-app.md. In packages/db set up the Supabase CLI, apply supabase/migrations/0001_init.sql, write 0002_seed_objectives.sql that loads supabase/seed/objectives.csv, and generate TypeScript types. Create supabase/seed/objectives.csv with roughly 120 KS1 objectives across the subjects and strands in docs/pupil-app.md section 5, sourced from the National Curriculum Year 1 and Year 2 programmes of study and phonics phases 2 to 5, with short codes. Write an RLS test script using two JWTs (a tutor and a parent) that proves: parent reads only their pupil, parent cannot read session_private_notes, recording insert without consent fails.
>
> Acceptance: migrations apply cleanly to a fresh project in eu-west-2, RLS tests pass, types generated.

### Session 8: pupil app, auth and layout

> Read CLAUDE.md and docs/pupil-app.md. In apps/pupils implement Supabase Auth with Google as the only provider. Callback route: on sign in, if the email matches TUTOR_EMAIL create or update profile with role tutor; else if the email matches an invited_email in pupil_guardians, create profile as parent and set profile_id on that row; else sign out and redirect to /not-yet. Build /sign-in using Google's official button asset, /not-yet, and the app layout using packages/ui header in restrained density with a three item nav. Middleware protects everything except /sign-in and /not-yet. Holding page when PUPIL_APP_ENABLED is false.
>
> Acceptance: tutor and allow-listed parent can sign in, unknown account is bounced with nothing created, all routes redirect to /sign-in when signed out.

### Session 9: pupil app, tutor views

> Read CLAUDE.md and docs/pupil-app.md. Build /pupils, /pupils/new, /pupils/[id]/sessions/new (date, duration, mode, objectives tick list grouped by subject and strand with emerging, developing, secure ratings, parent note, homework, private note, "send note to parent" toggle that emails via Resend and sets sent_to_parent_at), /pupils/[id]/consent (record and withdraw, upload the scanned form to a private Supabase Storage bucket), and /settings. All tutor routes gated server side with is_tutor(). Use packages/ui form fields.
>
> Acceptance: Sam can add a pupil, log a session with objectives, and send the note. Parent receives the email. A parent JWT hitting any tutor route gets a 403.

### Session 10: pupil app, parent views and integrations

> Read CLAUDE.md and docs/pupil-app.md. Build /pupils/[id] (overview, next session placeholder, three link tiles from external_links, progress summary), /pupils/[id]/sessions, /pupils/[id]/progress (latest rating per objective, grouped, three colour bar), /pupils/[id]/board (frame around the whiteboard link with an open in new tab fallback), /pupils/[id]/recordings (Drive links, consent status). Implement the ClassroomSync, RecordingStore and VideoProvider interfaces from docs/pupil-app.md with the launch implementations and a factory in integrations/index.ts. Root route redirects by role.
>
> Acceptance: a parent sees only their child, private notes never appear in any response payload, all three interfaces have a launch implementation and a test.

### Session 11: deploy both apps

> Read CLAUDE.md. Configure the two Vercel projects (root directories apps/web and apps/pupils, functions region lhr1), env vars, custom domains growingmindstutoring.co.uk and pupils.growingmindstutoring.co.uk, .uk redirect. Supabase auth redirect URLs for the production and preview domains. Write README-for-sam.md: editing site.ts in GitHub's web editor, the status flag, swapping a testimonial, adding a pupil in the app, what to do if a parent cannot sign in.
>
> Acceptance: both apps live on HTTPS, preview deploys on PRs, Sam has edited site.ts once and added her first pupil.

## 3. Cursor polish

Open the repo in Cursor with a browser alongside. Small visual tasks, one at a time.

- Spacing and rhythm against the reference, page by page, at 390, 768 and 1280
- Micro-interactions: hover, accordion easing, focus rings, button press
- Image crops, warm grade, WebP, hero under 150 KB, no placeholder striped boxes shipped
- Copy pass, read aloud as a parent, no em dashes, UK spelling
- Empty and edge states: no testimonials, no pricing, status paused, pupil app disabled, pupil with no sessions yet
- Replace every [PLACEHOLDER] with Sam's real data
- Lighthouse mobile 95+ on both apps
- Keyboard through both apps, screen reader labels, contrast on green buttons
- Enquiry flow and session note email end to end on the live domains
- Swap the letter G for Google's official sign in asset if not already done

## 4. Sam's setup, no code

1. Google Classroom from her personal Gmail, one class per pupil, parent's Google account as the student.
2. Bitpaper free, one paper per pupil. Trial Ziteboard for a week on the tablet and keep the one she prefers.
3. Google Meet link created from each Classroom, pinned in the stream.
4. In the pupil app: add each pupil, guardian email, and paste the Classroom, Bitpaper and Meet links.
5. Print the recording consent form from `handoff/legal-copy.md`. No recording until it is signed and recorded in the app.
6. Google Business Profile as a service area business, address hidden, ten areas set.

## 5. Launch checklist

- Both domains live on HTTPS, .uk redirecting, hello@ and notes@ forwarding
- Enquiry form tested from a phone, both emails arrive, reply-to works
- Pupil app: Sam signed in, first pupil added, first session logged, parent note received, parent signed in and saw it
- RLS test script green against production
- Supabase region eu-west-2 confirmed, Vercel functions lhr1 confirmed
- Privacy notice updated to name Supabase and Google sign in, reviewed by Sam
- Recording consent form printed, none recorded before it
- Google Business Profile live, Search Console verified, sitemap submitted
- Facebook page website field updated, pinned post
- Tutorful, Superprof, Tutors' Association listings created
- Flyer reprinted with the domain under "Get in touch"
- Every [PLACEHOLDER] gone from site.ts

## 6. Phase 2 triggers (not launch)

| Feature | Build when |
|---|---|
| tldraw whiteboard inside the pupil app | Bitpaper is limiting her or a second tutor joins |
| LiveKit video with API recording | She wants full session recordings without the Zoom local recording dance |
| R2 recording storage with signed URLs | More than a handful of recordings, or Drive sharing becomes untidy |
| Classroom API sync | She is double keying homework into Classroom and the app |
| Sanity or similar for site.ts | She has stopped being comfortable editing in GitHub |
| Stripe payment links | Bank transfer chasing becomes a chore |
| Self hosted BigBlueButton | She builds a team. Probably never |
