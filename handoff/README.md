# Handoff bundle: Growing Minds Tutoring

Everything Cursor needs is in this folder, plus `CLAUDE.md` at the repo root.

| File | What it is | How to use it |
|---|---|---|
| `Growing Minds Tutoring.dc.html` | The approved design. Every route, every form state, both hero treatments, both densities, all three `status` states. Open it in a browser (it loads `support.js` from the same folder). | Ground truth for layout, spacing, type and colour. Nav moves between routes. |
| `support.js` | Runtime the reference file needs to render. | Nothing to build from. Do not copy it into the app. |
| `design-tokens.md` | Colour, type, spacing, radius and component specs, with the exact values used in the reference. | Translate into the Tailwind v4 `@theme` block in `globals.css` before building anything. |
| `site.ts` | The whole content model, already populated with the real copy from the design. | Drop in at `content/site.ts`. Every page reads from it. No hard coded copy in page files. |
| `legal-copy.md` | Drafted privacy notice, tutoring terms and the recording consent form. | Move into `site.ts` and have Sam review before launch. |
| `prompts.md` | The build session prompts, in order, plus the polish list. | Paste one per session. |
| `globals.css` | **The locked stylesheet.** Tailwind v4 `@theme` tokens plus the component layer every primitive uses. | Copy to `app/globals.css` unchanged. Do not add hues, fonts, radii or shadows. |
| `components/` | The locked component library as real `.tsx` files, with their own README. | Copy to `components/`. Build pages by composing these, not by writing new markup. |
| `brand/` | Flyer artwork and any supplied assets. | Source for the OG image and the mascot request. |

---

## The fidelity contract

This design is signed off. The build is a translation, not a redesign. Treat the reference file as a spec with pixel values in it.

**Do not change, "improve", modernise or substitute any of the following.**

### Fonts, exactly these three

| Role | Family | Weights | Loaded via |
|---|---|---|---|
| Display and headings | **Source Serif 4** | 600, 700 | `next/font/google`, `display: 'swap'` |
| Body and UI | **Nunito** | 400, 600, 700, 800 | `next/font/google`, `display: 'swap'` |
| Script accents | **Caveat** | 400, 600 | `next/font/google`, `display: 'swap'` |

No Inter. No system font stack as a "safe default". No variable-weight substitutes. Headings are **sentence case Source Serif 4** at `-.015em`, never uppercase and never a condensed sans; Caveat is decorative only and never carries information on its own.

### Colour

Use only the tokens in `globals.css`. No new hues, no Tailwind default greens, no gradients beyond the two soft washes already in the reference. Peach and clay are shape colours and never carry text. One dark green band per page, maximum.

### Layout

- Container is `--container` 1180px with 24px gutters. Legal and pupil pages use 1000px.
- Section rhythm is `--space-section` (78px), applied only by `<Section>`. Never hand-set section padding.
- Header structure is fixed: sage trust strip with the Facebook link (not sticky), then **one** sticky bar holding the leaf lockup left, the four item nav centre, and the tap-to-call pill plus the Pupil Area sign in right. Status banner sits below it when `site.status` is not `accepting`.
- Hero is fixed: serif sentence-case h1 left with the peach blob bleeding off the lower left, blob-masked photo right, Caveat note under the buttons, sage trust bar immediately below.
- Nav is exactly four items: Subjects and prices, About me, FAQs, Contact. Adding a fifth is a content decision for Sam, not a build decision.
- Footer order is fixed: pale green CTA band, then the **warm paper** footer (leaf lockup + tagline row, Explore, The small print, Safeguarding, then the full width Portsmouth area chips), then the bottom bar. The footer is light: the dark band on a page is the CTA above it.

### Accessibility, non-negotiable

- WCAG 2.1 AA. Body text 4.5:1 minimum against its actual background. The greens in `design-tokens.md` are already checked; anything you invent is not.
- Real `<label>` on every field, never placeholder-as-label.
- 44px minimum tap targets. Inputs at 16px so iOS does not zoom.
- Visible focus rings. Keyboard reachable accordions and tabs.

### How to prove it is inch perfect

Before each PR, screenshot the built page and the reference at **390px, 768px and 1280px** and compare side by side. Check in this order: section order, vertical rhythm, type scale, colour, radius, then copy. Any deliberate difference goes in the PR description with a reason. Anything undocumented is a bug.

---

## How to read the design reference

It is a single page app with an in-page router, built for review rather than production. Translate it, do not copy it.

- **Nav** switches route. The footer links to the rest, including the privacy notice, the terms and (as a design reference affordance only) the 404 page. The "design reference: 404 page" link must not ship.
- **`/contact`** has a small monospace "form state preview" strip above the form. It cycles default / error / submitting / success. That strip is a review affordance and must **not** be built.
- **Design options** exposed as controls on the reference: `heroVariant` (`flyer split` or `centred stack`) and `density` (`playful` or `restrained`). **Build `flyer split` + `playful`.** The alternates exist so Sam can see the choice; do not build a runtime switch for them.
- **`status`** and `showBooking` are also controls on the reference. These two **are** real: they map to `site.status` and `site.booking.enabled`.
- Anything in a **soft sage-to-peach wash with monospace text** is an image slot. The text says what photo belongs there. Use `next/image` from `/public/brand`, WebP, hero under 150KB, and never ship the placeholder.
- Anything in **`[SQUARE BRACKETS]`** is missing real data from Sam (prices, quotes, travel radius, phonics scheme, her safeguarding paragraph). Keep the brackets in `site.ts` until she supplies the real value, so nothing fake ships.
- Icons in the reference are Lucide paths at 1.9px stroke in `currentColor`. Use `lucide-react`: graduation-cap, shield-check, monitor, plus, book-open, type, pencil, pen-line, house, car, hourglass.
- The logo is the **three leaf mark** in `components/LeafMark.tsx`, built from CSS shapes as a stand-in. Ask Sam's flyer designer for the vector version and swap it into that one component. Do not redraw it anywhere else.
- The "Sign in with Google" button uses a plain letter G as a stand-in. Swap in Google's official asset before launch; their brand terms require it.
- Copy comes from `site.ts` only. If a string you need is not there, add it to `site.ts` rather than typing it into a component. **No em dashes anywhere in copy.**

## Routes (8)

`/` · `/about` · `/tutoring` (subjects, how a session works, `#pricing`) · `/tutoring-portsmouth` · `/faqs` · `/pupil-area` · `/contact` · `/policies` (privacy and terms, tabbed) · plus `/404`.

301s to keep: `/how-it-works` and `/pricing` → `/tutoring` (`/pricing` to `#pricing`), `/privacy` and `/terms` → `/policies` as deep links.

`/tutoring-portsmouth` and `/pupil-area` are deliberately out of the nav. Portsmouth is reached from the footer, the home page and search; the pupil area from the sign in link in the trust strip.

## Build order

1. Copy `globals.css` and `components/` in as they are, wire the three fonts, prove it at `/dev/components`. **No new CSS is written after this step.**
2. Layout shell: trust strip, sticky brand and contact bar, four item nav, footer, status banner driven by `site.status`.
3. `/`, `/about`, `/tutoring`.
4. `/contact`: server action, Zod, Turnstile, two Resend emails, all three status behaviours.
5. `/faqs`, `/tutoring-portsmouth`, `/pupil-area`, `/policies`, 404.
6. SEO layer: metadata, OG image, JSON-LD, sitemap, robots.
7. Deploy: Vercel, Cloudflare DNS, custom domain, `.uk` redirect, README for Sam.

One session per step, fresh context each time, commit at the end of each.
