"use client";

import * as React from "react";
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

// shadcn/ui Checkbox, restyled to the locked tokens in globals.css. Radix
// supplies role="checkbox", aria-checked and Space to toggle.

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "grid size-[22px] shrink-0 cursor-pointer place-items-center rounded-[6px] border-2 border-green bg-transparent text-white",
        "data-[state=checked]:bg-green",
        "focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-green",
        "aria-invalid:border-danger",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator data-slot="checkbox-indicator" className="grid place-items-center">
        <Check size={13} strokeWidth={3} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
