# CLAUDE.md: Growing Minds Tutoring

This file lives at the repo root. It is the plan of record for the marketing site and the pupil app. The design is signed off and lives in `handoff/`; read `handoff/README.md` before doing anything visual. Supersedes the earlier `growing-minds-tutoring-website-plan.md`.

## 1. What this is

Sam is a qualified primary school teacher (QTS, 15+ years in Key Stage 1, Enhanced DBS on the Update Service) tutoring KS1 Maths, Early Reading, Phonics, Handwriting and Literacy. Based in Portsmouth. Three delivery modes: online, at her home, at the family's home. Part time while she looks for full time roles.

Two products, one monorepo:

| App | Domain | Purpose | State at launch |
|---|---|---|---|
| `apps/web` | `growingmindstutoring.co.uk` | Marketing site, enquiry form, signposting to the pupil area | Complete, live |
| `apps/pupils` | `pupils.growingmindstutoring.co.uk` | Parent sign in, session notes, record of achievement, links to whiteboard and recordings | Scaffolded, deployed, behind a flag, Sam is the only user |

Google Classroom stays the system of record for homework and marked work at launch. The pupil app adds what Classroom does not do: progress against KS1 objectives, a parent-facing session note, and a single place for the whiteboard, video and recording links. It grows into the full portal (whiteboard, video, recordings in our own storage) only when demand justifies it.

## 2. Non-negotiables

- **Fidelity.** `handoff/Growing Minds Tutoring.dc.html` is the spec. Build `flyer split` hero and `playful` density. Fonts are Oswald, Nunito, Caveat via `next/font/google`, nothing else. Palette is `handoff/design-tokens.md` only.
- **Copy lives in `packages/content/site.ts`.** No hard coded strings in components. UK spelling. No em dashes anywhere, in copy or in code comments.
- **Placeholders in `[SQUARE BRACKETS]` never ship.** They are the list of things Sam still owes us.
- **Data minimisation.** Parent name, email, phone. Child first name and year group. Session notes. Nothing else, anywhere, in any table. No surnames, no dates of birth, no addresses, no photos of children.
- **Children never get accounts.** Parents sign in. The pupil app has no child-facing login.
- **UK or EU storage only.** Supabase project in `eu-west-2` (London). Any object storage in R2 with EU jurisdiction. Vercel functions pinned to `lhr1`.
- **Recordings only with written consent**, whiteboard and audio by default, never video of a child by default, shared by revocable link with one family, deleted after 12 months or at the end of tutoring.
- **Accessibility** WCAG 2.1 AA, 44px tap targets, real labels, 16px inputs, visible focus.
- **No em dashes.** Repeated because the model keeps adding them.

## 3. Repo layout

```
growing-minds/
  CLAUDE.md
  handoff/                       design bundle, read only
  apps/
    web/                         Next.js 15, marketing site
    pupils/                      Next.js 15, pupil app
  packages/
    content/                     site.ts and legal copy, shared
    ui/                          tokens (globals.css @theme), fonts, shared components
    db/                          Supabase types, migrations, seed
  supabase/
    migrations/
    seed/
  turbo.json  pnpm-workspace.yaml
```

Turborepo with pnpm. Two Vercel projects pointing at `apps/web` and `apps/pupils`. Shared packages are built by Turborepo, not published.

## 4. Marketing site (`apps/web`)

**Routes (8 plus 404):** `/`, `/about`, `/tutoring` (subjects, how a session works, `#pricing`), `/tutoring-portsmouth`, `/faqs`, `/pupil-area`, `/contact`, `/policies` (privacy and terms, tabbed).
**301s:** `/how-it-works` and `/pricing` to `/tutoring` (`/pricing` to `#pricing`), `/privacy` and `/terms` to `/policies` deep links.
**Nav:** exactly four items: Subjects and prices, About me, FAQs, Contact. `/tutoring-portsmouth` reached from footer, home and search. `/pupil-area` reached from the trust strip sign in link.

**Header:** trust strip (not sticky) with the pupil sign in link, then the sticky brand and contact bar, then the four item nav row, then the amber status banner when `site.status` is not `accepting`.

**Content model:** `packages/content/site.ts` as shipped in the handoff, with two additions: `legal.privacy.sections` and `legal.terms.sections` from `handoff/legal-copy.md`, and `pupilArea.appUrl` pointing at the pupil app. The `pupilArea.signIn.cta` button and every "Sign in with Google" affordance link to `pupilArea.appUrl`. Nothing on the marketing site authenticates anyone.

**Status flag:** `accepting`, `waitlist`, `paused`. Drives the banner, the form title, lead and submit label, and hides the form when paused.

**Enquiry form:** server action, Zod, Cloudflare Turnstile, two Resend emails (notification to Sam with reply-to the parent, plain text auto-reply). In-memory rate limit. Cal.com embed behind `site.booking.enabled`.

**SEO:** per page metadata, OG image from the flyer, `LocalBusiness` as a service area business with no street address, `Person` on `/about`, `FAQPage` on `/faqs`, sitemap and robots.

## 5. Pupil app (`apps/pupils`)

Full detail in `docs/pupil-app.md`. Summary:

- **Auth:** Supabase Auth, Google provider only, so a parent signs in with the same Google account they use for Classroom. Sam is `tutor`, everyone else is `parent`. Allow list: a parent can only sign in if Sam has already created their pupil and linked their email. Unknown Google accounts see a polite "ask Sam to add you" page and nothing else.
- **Data:** `profiles`, `pupils`, `pupil_guardians`, `objectives`, `sessions`, `session_objectives`, `session_private_notes`, `consents`, `recordings`, `external_links`. Row Level Security on everything. Parents see only their own pupils. Private notes are in a separate tutor-only table so they can never leak through a join.
- **Launch scope (scaffold):** sign in, allow list, Sam's admin views (pupils, add session, tick objectives, write the parent note), parent views (their child, session history with notes, progress against objectives, the three links: Classroom, whiteboard, video). Nothing else.
- **Deliberately stubbed at launch:** `/board` route wraps the Bitpaper link; `/recordings` lists Google Drive links only; Classroom sync is a typed interface with a no-op implementation. tldraw, LiveKit and R2 arrive in phase 2 behind the same interfaces.
- **Flag:** `site.pupilArea.appEnabled`. When false, the marketing site's sign in link points at Google Classroom directly and the pupil app returns a holding page.

## 6. Remote tutoring at launch, no code

Google Classroom (one class per pupil, parent's Google account as the student). Google Meet from the Classroom. Bitpaper free, one paper per pupil, link pinned in the class stream. Homework and feedback through Classroom assignments. Recordings only after the consent form exists; whiteboard clips by default.

## 7. Cost at launch

Domain about £10 a year. Vercel Hobby, Cloudflare, Resend, Turnstile, Cal.com, Supabase free tier, Google Classroom, Meet, Bitpaper free: all £0. First paid upgrade is Bitpaper Pro at about $8 a month once Sam has three regular online pupils; second is Supabase Pro at $25 a month only if the free tier's pause-after-inactivity becomes a problem, which it will not while Sam signs in weekly.

## 8. Build order

One Claude Code session per numbered step, fresh context, commit at the end. Prompts are in `docs/build-scope.md`.

1. Monorepo, tokens, fonts, shared component library, `/dev/components`
2. Web layout shell: header, footer, status banner
3. Web pages: `/`, `/about`, `/tutoring`
4. Web contact form and email
5. Web remaining pages, pupil area signposting, policies, 404
6. Web SEO layer
7. Supabase project, migrations, seed, RLS, generated types
8. Pupil app: auth, allow list, layout
9. Pupil app: tutor views
10. Pupil app: parent views and links
11. Deploy both apps, domains, env, README for Sam
12. Cursor polish

## 9. Still needed from Sam

Logo and mascot vector. Photo of her and the tutoring space. Facebook page URL. Price, session length, block price. Travel radius and fee. Phonics scheme. Two or three parent quotes with written permission. Her own "why I tutor" paragraph. Her own safeguarding wording. Full name for the privacy notice. Confirmation the domain is bought. Her Google account email for the tutor role.
