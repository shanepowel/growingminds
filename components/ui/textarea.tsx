import * as React from "react";
import { cn } from "@/lib/utils";

// shadcn/ui Textarea, restyled onto the locked .gm-field class.

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn("gm-field resize-y leading-[1.55] aria-invalid:border-danger", className)}
      {...props}
    />
  );
}

export { Textarea };
