import { Check } from "lucide-react";

/** Green check bullet from the flyer. Size controls the circle diameter. */
export function CheckItem({
  children,
  size = 24,
}: {
  children: React.ReactNode;
  size?: number;
}) {
  return (
    <li style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "7px 0" }}>
      <span
        aria-hidden
        style={{
          marginTop: 2,
          flex: "0 0 auto",
          width: size,
          height: size,
          borderRadius: "50%",
          background: "var(--color-green)",
          color: "#fff",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Check size={size * 0.55} strokeWidth={3} />
      </span>
      <span style={{ fontSize: "15.5px", lineHeight: 1.5, color: "#33453a" }}>{children}</span>
    </li>
  );
}
