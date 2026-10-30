import { PortableText, type PortableTextComponents, type PortableTextBlock } from "@portabletext/react";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p style={{ margin: "0 0 20px", fontSize: 17, lineHeight: 1.75, color: "var(--color-body-dark)" }}>
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 style={{ fontSize: 24, margin: "30px 0 10px" }}>{children}</h2>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul style={{ margin: "0 0 20px", paddingLeft: 0, listStyle: "none", display: "grid", gap: 8 }}>
        {children}
      </ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
        <span
          aria-hidden
          style={{ flex: "0 0 auto", width: 20, height: 20, borderRadius: "50%", background: "var(--color-green)", color: "#fff", display: "grid", placeItems: "center", fontSize: 11, fontWeight: 800, marginTop: 4 }}
        >
          &#10003;
        </span>
        <span style={{ fontSize: "16.5px", lineHeight: 1.6, color: "var(--color-body-dark)" }}>{children}</span>
      </li>
    ),
  },
};

/** Renders an insight body (Portable Text) from Sanity or the local fallback. */
export function InsightBody({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}
