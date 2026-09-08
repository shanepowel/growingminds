# Design tokens

**`globals.css` in this folder is the locked source of truth.** Copy it to
`app/globals.css` unchanged. This file explains what each token is for and
where it may be used. If a value is not here, it does not exist in the brand.

## Colour

| Token | Hex | Use | Never |
|---|---|---|---|
| `--color-ink` | #1B4A2C | headings, dark bands, primary ink | body copy under 16px on sage |
| `--color-ink-deep` | #123620 | hover on dark surfaces | large fills |
| `--color-green` | #2F6B3A | links, ticks, chip-on, secondary fills | headings |
| `--color-green-mid` | #4A7C3F | primary CTA fill, active nav underline | body text on paper |
| `--color-green-soft` | #7FA05F | leaf mark only | text, borders |
| `--color-sage` | #DCE8CE | icon discs on dark, buttons on dark | text |
| `--color-sage-pale` | #EEF3E6 | trust strip, section bands, sage cards | text |
| `--color-sage-line` | #C9D8B8 | borders on sage surfaces | text |
| `--color-paper` | #F7F6F1 | page background | text |
| `--color-paper-warm` | #FAF8F3 | footer | anything else |
| `--color-peach` | #F6DCCB | the hero blob, large soft shapes | text, icons, small shapes |
| `--color-clay` | #D89272 | third leaf, tiny separators | text (fails AA) |
| `--color-clay-ink` | #A9603A | Caveat script accents on paper | body copy |
| `--color-body` | #4C5B51 | UI copy, captions | on sage-dark |
| `--color-body-dark` | #3E4C44 | long-form body copy | on dark |
| `--color-on-dark` | #DCE8CE | body copy on `--color-ink` | on paper |

Contrast: every pairing above is checked at AA. Peach and clay are
**shape colours**, not text colours. One dark band per page, maximum two
background colours per screen.

## Type: exactly three families

| Role | Family | Weights | Notes |
|---|---|---|---|
| Display, h1 to h3, prices | **Source Serif 4** | 600, 700 | sentence case, `letter-spacing: -.015em`. Never uppercase, never Oswald |
| Body, UI, labels, buttons | **Nunito** | 400, 600, 700, 800 | |
| Script accents | **Caveat** | 500, 600 | decorative, never the only carrier of information |

Load all three with `next/font/google`, `display: "swap"`, and bind them to
`--font-display`, `--font-body`, `--font-script`. No Inter, no system stack
fallback as a "safe default".

Scale: `--text-h1` … `--text-eyebrow` in `globals.css`. Body never below
16px; inputs at 16px so iOS does not zoom.

## Rhythm and shape

- Container `--container` 1180px, narrow `--container-narrow` 1000px, gutters 24px.
- Every section uses `<Section>`; vertical padding is `--space-section` (78px). Do not hand-set section padding.
- Radii: cards 22px, inputs 11px, buttons and chips full pill.
- Organic frames: `--radius-blob` (images) and `--radius-blob-b` (peach shape). Two masks only, alternated.
- Shadows: `--shadow-card` at rest, `--shadow-lift` on hover for linked cards. No third shadow.

## Motion

150ms ease on colour only. No entrance animations, no parallax, no scroll effects.
