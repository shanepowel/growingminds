/** Caveat accent. Decorative: never the only place information appears. */
export function ScriptNote({ children }: { children: string }) {
  return <p className="gm-script" style={{ margin: 0 }}>{children}</p>;
}
