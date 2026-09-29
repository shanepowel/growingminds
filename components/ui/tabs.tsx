"use client";

import * as React from "react";
import { Tabs as TabsPrimitive } from "radix-ui";
import { cn } from "@/lib/utils";

// shadcn/ui Tabs, restyled to the locked tokens in globals.css. Radix supplies
// the tab roles, arrow key navigation and roving focus.

function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return <TabsPrimitive.Root data-slot="tabs" className={cn("flex flex-col", className)} {...props} />;
}

function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
  return <TabsPrimitive.List data-slot="tabs-list" className={cn("flex flex-wrap gap-2", className)} {...props} />;
}

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "inline-flex min-h-11 cursor-pointer items-center rounded-pill border-[1.5px] border-sage-line bg-white px-[22px] py-3",
        "font-body text-[15.5px] font-extrabold text-body-dark transition-colors",
        "hover:bg-sage-pale data-[state=active]:border-ink data-[state=active]:bg-ink data-[state=active]:text-white",
        "focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-green",
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-green", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
