/** Green tick list. The only list style on the site. */
export function CheckList({ items, divided }: { items: readonly string[]; divided?: boolean }) {
  return (
    <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
      {items.map((item) => (
        <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "7px 0",
          borderBottom: divided ? "1px solid var(--color-sage-line)" : undefined }}>
          <span aria-hidden style={{ flex: "0 0 auto", width: 20, height: 20, borderRadius: "50%",
            background: "var(--color-green)", color: "#fff", display: "grid", placeItems: "center",
            fontSize: 11, fontWeight: 800, marginTop: 3 }}>&#10003;</span>
          <span style={{ fontSize: "15.5px", color: "#33453A", lineHeight: 1.5 }}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
