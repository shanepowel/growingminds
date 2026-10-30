import type { PortableTextBlock } from "@portabletext/react";

/**
 * Tiny Portable Text builders so the local fallback bodies in
 * content/insight-bodies.ts are authored in the same shape Sanity returns.
 * Keys are assigned once at module load, which is stable across renders.
 */
let counter = 0;
const key = () => `k${(counter += 1)}`;

function block(style: string, text: string, listItem?: "bullet"): PortableTextBlock {
  return {
    _type: "block",
    _key: key(),
    style,
    markDefs: [],
    ...(listItem ? { listItem, level: 1 } : {}),
    children: [{ _type: "span", _key: key(), text, marks: [] }],
  } as PortableTextBlock;
}

/** A paragraph. */
export const p = (text: string) => block("normal", text);
/** A subheading. */
export const h2 = (text: string) => block("h2", text);
/** A bullet list item. */
export const li = (text: string) => block("normal", text, "bullet");
