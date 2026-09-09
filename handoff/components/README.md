# Component library (locked)

These are the only primitives the site is built from. Plain React server
components unless marked `"use client"`. Every visual value comes from
`globals.css`; **no component contains a hex code, a px radius or a font
name** except the two subject tints, which are documented in place. If you
need a value, add a token, do not inline it.

Drop the folder in at `components/` and import from `@/components/...`.

| File | Used by |
|---|---|
| `LeafMark.tsx` | header, footer, 404 |
| `Button.tsx` | everywhere. `variant`: primary / secondary / onDark. Header Contact uses `.gm-btn-cta` |
| `Section.tsx` | every page. Container + rhythm + optional band |
| `PageIntro.tsx` | the top of every route except home. Shaped, carries h1 + lead |
| `Blob.tsx` | decorative shapes. One or two per paper section, bleeding off an edge |
| `Eyebrow.tsx` `ScriptNote.tsx` | section labels, Caveat accents |
| `Card.tsx` | testimonials, modes, policies, pupil links |
| `CheckList.tsx` | outcomes, mode points, qualifications |
| `Chip.tsx` | areas covered, form multi-selects (client) |
| `BlobImage.tsx` | hero image, About portrait, mode media |
| `Hero.tsx` `TrustBar.tsx` | home only |
| `SubjectCard.tsx` | /curriculum, the five subjects |
| `ModeTabs.tsx` | /curriculum, how a session works (client) |
| `StepList.tsx` | /curriculum, getting started |
| `PriceCard.tsx` | /costs |
| `InsightCard.tsx` | /insights |
| `CtaBand.tsx` | every page except /contact, /pupil-area, /policies, 404 |
| `SiteHeader.tsx` `SiteFooter.tsx` `StatusBanner.tsx` | layout shell |

Still to build in session 4, from the reference: the enquiry form and its
four states. Use `gm-field`, `gm-label` and `Chip` and it will match.

Rules that survive review:

1. No component invents spacing. Vertical rhythm is `<Section>` and `<PageIntro>` only.
2. Buttons are `<Button>`. A styled `<a>` or `<div onClick>` is a bug.
3. Images are `next/image` inside `<BlobImage>`, never a bare `<img>`, and every media slot uses an organic radius, never a plain rounded rectangle.
4. Every paper section gets `.gm-shaped` and one or two `<Blob>`s. Blobs are decorative: nothing readable sits on their edge.
5. Copy is passed in as props from `content/site.ts`. No literal strings.
6. Icons are `lucide-react` at `strokeWidth={1.9}`, `currentColor`.
7. Email is the only direct channel in v1: `hello@growingmindstutoring.co`. No phone number anywhere.
