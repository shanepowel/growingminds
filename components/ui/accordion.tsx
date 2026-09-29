"use client";

import * as React from "react";
import { Accordion as AccordionPrimitive } from "radix-ui";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

// shadcn/ui Accordion, restyled to the locked tokens in globals.css. Radix
// supplies the heading, button, region wiring and arrow key navigation.

function Accordion(props: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("mb-2.5 overflow-hidden rounded-[14px] border border-rule-soft bg-white", className)}
      {...props}
    />
  );
}

function AccordionTrigger({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="m-0 flex text-[17px]">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group flex min-h-11 w-full cursor-pointer items-center gap-3.5 bg-transparent px-5 py-[17px] text-left",
          "font-body text-[17px] font-extrabold leading-snug text-ink",
          "focus-visible:outline-3 focus-visible:-outline-offset-3 focus-visible:outline-green",
          className,
        )}
        {...props}
      >
        {children}
        <span
          aria-hidden
          className="ms-auto grid size-[26px] shrink-0 place-items-center rounded-full bg-sage-pale text-green"
        >
          <Plus size={16} className="group-data-[state=open]:hidden" />
          <Minus size={16} className="hidden group-data-[state=open]:block" />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content data-slot="accordion-content" {...props}>
      <div className={cn("max-w-[70ch] px-5 pb-[19px] text-base leading-[1.7] text-body", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
