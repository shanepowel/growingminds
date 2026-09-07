# Growing Minds Tutoring 🌱

KS1 specialist tutoring in Portsmouth and online. A fast, low-maintenance
brochure site built with **Next.js 15 (App Router)**, **TypeScript** and
**Tailwind CSS v4**. Designed to sit on free tiers and be edited by Sam without
touching code.

## Editing content (for Sam)

Almost everything on the site — prices, availability, testimonials, FAQs, the
tutor bio — lives in one file: [`content/site.ts`](content/site.ts). You can
edit it directly in GitHub's web editor; every save triggers a new deploy.

- `status` is the pause switch:
  - `"accepting"` — normal, the enquiry form is live.
  - `"waitlist"` — form stays live but the copy changes to "join the waitlist",
    and an amber banner appears.
  - `"paused"` — the form is hidden and a holding message is shown.
- Anything in `[SQUARE BRACKETS]` (prices, quotes, travel radius, Facebook URL)
  is still a placeholder waiting for a real value. Replace the whole bracket,
  keep the quotes.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

Node.js 20+ is required.

## Environment variables

See [`.env.example`](.env.example). All are optional for local work — without
them the enquiry form still validates and submits, logging the enquiry to the
server console instead of emailing, and skipping the spam check. In production
set them for Resend (email) and Cloudflare Turnstile (spam protection).

## Project structure

```
app/                  Routes (App Router) + sitemap, robots, OG image, 404
  contact/actions.ts  Server action: Zod validation, Turnstile, Resend, rate limit
components/site/       UI: header, footer, forms, cards, JSON-LD
content/site.ts        The whole "CMS" — Sam edits this
lib/                   Nav, icon map, placeholder helpers
public/brand/          Brand assets (flyer; real photos drop in here as WebP)
```

## Routes

`/` · `/about` · `/tutoring` · `/how-it-works` · `/tutoring-portsmouth` ·
`/pricing` · `/faqs` · `/pupil-area` · `/contact` · `/privacy` · `/terms`

## Deploying

Designed for Vercel (Hobby) with the domain and DNS on Cloudflare. Push to the
connected repo and Vercel builds automatically; pull requests get preview
deploys. Set the environment variables above in the Vercel project settings.

## Notes for the build

- The logo/mascot is a placeholder circle. Drop the real vector into the `Logo`
  component and `public/brand` when Sam's designer provides it.
- Image slots (striped sage boxes) mark where real photos go. Add WebP files to
  `public/brand` and swap the `ImageSlot` for `next/image`. Never ship a stock
  photo of a child.
