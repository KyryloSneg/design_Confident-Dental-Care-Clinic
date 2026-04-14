"use client";

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";

import { cn } from "@/utils/shadcn";

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col overflow-hidden", className)}
      {...props}
    />
  );
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={className}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger accordion-trigger-ring relative flex flex-1 cursor-pointer items-start justify-between gap-6 border-b border-primary-100 p-(--burger-menu-item-padding) accordion-trigger-text select-none aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto [[data-slot='accordion-item']:first-child_&]:pt-10.25",
          className,
        )}
        {...props}
      >
        {children}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-slot="accordion-trigger-icon"
          className="pointer-events-none shrink-0"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9999 16C11.7719 16 11.5449 15.923 11.3599 15.768L5.35991 10.768C4.93591 10.415 4.87791 9.78398 5.23191 9.35998C5.58491 8.93598 6.21491 8.87898 6.63991 9.23198L12.0109 13.708L17.3729 9.39298C17.8029 9.04698 18.4329 9.11498 18.7789 9.54498C19.1249 9.97498 19.0569 10.604 18.6269 10.951L12.6269 15.779C12.4439 15.926 12.2219 16 11.9999 16Z"
            fill="#346CFF"
          />
          <mask
            id="mask0_66_4123"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="5"
            y="9"
            width="14"
            height="7"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.9999 16C11.7719 16 11.5449 15.923 11.3599 15.768L5.35991 10.768C4.93591 10.415 4.87791 9.78398 5.23191 9.35998C5.58491 8.93598 6.21491 8.87898 6.63991 9.23198L12.0109 13.708L17.3729 9.39298C17.8029 9.04698 18.4329 9.11498 18.7789 9.54498C19.1249 9.97498 19.0569 10.604 18.6269 10.951L12.6269 15.779C12.4439 15.926 12.2219 16 11.9999 16Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_66_4123)">
            <rect
              width="24"
              height="24"
              className="fill-text-accordion transition duration-300 group-aria-expanded/accordion-trigger:fill-text-accordion-interacted"
            />
          </g>
        </svg>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="overflow-hidden text-text-accordion-content data-open:animate-accordion-down data-closed:animate-accordion-up"
      {...props}
    >
      <div
        className={cn(
          "h-(--accordion-panel-height) **:font-sans **:text-[1rem] **:font-light data-ending-style:h-0 data-starting-style:h-0 [&_a]:inline-flex [&_a]:w-full [&_a]:border-b [&_a]:border-text-accordion-content/10 [&_a]:p-(--burger-menu-item-padding) [&_a]:pt-5 [&_a]:pb-2.5 [&_a]:transition-colors [&_a]:select-none [&_a]:hover:text-text-accordion-content-interacted [&_a]:focus-visible:border-ring [&_a]:focus-visible:inset-ring-[3px] [&_a]:focus-visible:inset-ring-ring/50 [&_p:not(:last-child)]:mb-4",
          className,
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
