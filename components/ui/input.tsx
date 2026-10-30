import * as React from "react";
import { cn } from "@/lib/utils";

// shadcn/ui Input, restyled onto the locked .gm-field class. 16px type comes
// from the base layer so iOS does not zoom.

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn("gm-field aria-invalid:border-danger", className)}
      {...props}
    />
  );
}

export { Input };
