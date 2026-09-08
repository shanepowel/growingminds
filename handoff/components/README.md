# Component library (locked)

These are the only primitives the site is built from. They are plain
React server components unless marked `"use client"`. Every visual value
comes from `globals.css`; **no component contains a hex code, a px radius
or a font name.** If you need a value, add a token, do not inline it.

Drop the folder in at `components/` and import from `@/components/...`.

| File | Used by |
|---|---|
| `LeafMark.tsx` | header, footer, 404 |
| `Button.tsx` | everywhere. `variant`: primary / secondary / onDark |
| `Section.tsx` | every page. Wraps container + rhythm + optional band |
| `Eyebrow.tsx` `ScriptNote.tsx` | section intros, accents |
| `Card.tsx` | subjects, modes, testimonials, pricing, pupil links |
| `Chip.tsx` | areas covered, form multi-selects (client) |
| `BlobImage.tsx` | hero image, About portrait, mode media |
| `SiteHeader.tsx` | layout shell |
| `SiteFooter.tsx` | layout shell |
| `StatusBanner.tsx` | layout shell, driven by `site.status` |
| `TrustBar.tsx` | home, below hero |
| `Hero.tsx` | home only |

Rules that survive review:

1. No component invents spacing. Vertical rhythm is `<Section>` only.
2. Buttons are `<Button>`. A styled `<a>` or `<div onClick>` is a bug.
3. Images are `next/image` inside `<BlobImage>`, never a bare `<img>`.
4. Copy is passed in as props from `content/site.ts`. No literal strings.
5. Icons are `lucide-react` at `strokeWidth={1.9}`, `currentColor`.
