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
    <li className="flex items-start gap-3 py-[7px]">
      <span
        aria-hidden
        className="mt-[2px] flex flex-shrink-0 items-center justify-center rounded-full bg-leaf text-white"
        style={{ width: size, height: size }}
      >
        <Check size={size * 0.55} strokeWidth={3} />
      </span>
      <span className="text-[15.5px] leading-[1.5] text-[#33453a]">
        {children}
      </span>
    </li>
  );
}
