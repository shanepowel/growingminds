import { site } from "@/content/site";

/** Amber strip under the header. Only shown when status is not "accepting". */
export function StatusBanner() {
  if (site.status === "accepting") return null;
  const message =
    site.status === "waitlist" ? site.banners.waitlist : site.banners.paused;

  return (
    <div
      role="status"
      className="bg-amber px-6 py-2.5 text-center text-[14.5px] font-bold text-amber-ink"
    >
      {message}
    </div>
  );
}
