import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// shadcn/ui Native Select, restyled onto the locked .gm-field class. A native
// select keeps the year-group picker usable on a phone.

type NativeSelectSize = "sm" | "default";

function nativeSelectSizeClass(size: NativeSelectSize): string {
  switch (size) {
    case "sm":
      return "py-1";
    case "default":
      return "";
    default: {
      const exhaustive: never = size;
      return exhaustive;
    }
  }
}

function NativeSelect({
  className,
  size = "default",
  ...props
}: Omit<React.ComponentProps<"select">, "size"> & { size?: NativeSelectSize }) {
  return (
    <div
      className="group/native-select relative w-full has-[select:disabled]:opacity-50"
      data-slot="native-select-wrapper"
    >
      <select
        data-slot="native-select"
        data-size={size}
        className={cn(
          "gm-field appearance-none pr-10 aria-invalid:border-danger",
          nativeSelectSizeClass(size),
          className,
        )}
        {...props}
      />
      <ChevronDown
        className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-muted"
        aria-hidden="true"
        data-slot="native-select-icon"
      />
    </div>
  );
}

function NativeSelectOption({ className, ...props }: React.ComponentProps<"option">) {
  return <option data-slot="native-select-option" className={cn(className)} {...props} />;
}

function NativeSelectOptGroup({ className, ...props }: React.ComponentProps<"optgroup">) {
  return <optgroup data-slot="native-select-optgroup" className={cn(className)} {...props} />;
}

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption };
