"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/shadcn";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full bg-clip-padding whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-auto disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-secondary-100 not-disabled:hover:shadow-primary-button uppercase font-jakarta",
        outline:
          "border-primary-400 border-1 text-text-primary not-disabled:hover:border-primary-500 not-disabled:hover:shadow-outline-button aria-expanded:border-primary-500 aria-expanded:shadow-outline-button font-sans",
        secondary:
          // if we had used multiple secondary buttons,
          // the tracking and text rules would have been moved into a separate variant (variants["..."])
          "text-text-primary capitalize font-sans font-medium tracking-[0.06em] text-[0.9375rem]",
      },
      size: {
        default:
          // px is 1px lower in order to match the width
          "h-10 gap-2 px-6.75 py-2.75 text-s4-semibold [&>[data-slot='right-chevron']]:w-4 [&>[data-slot='right-chevron']]:h-4.25",
        sm: "h-9 gap-3",
        lg: "h-12 gap-4 px-8 py-2.75 text-s3-semibold [&>[data-slot='right-chevron']]:w-4 [&>[data-slot='right-chevron']]:h-4.25",
        xl: "h-14 gap-4 px-9 py-3.75 text-s3-semibold",
        icon: "h-8 aspect-square",
        "icon-lg": "w-10.25 h-10",
        "icon-2lg": "w-10.5 h-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonProps = ButtonPrimitive.Props & {
  isWithRightChevron?: boolean;
} & VariantProps<typeof buttonVariants>;

function Button({
  children,
  className,
  variant = "default",
  size = "default",
  isWithRightChevron = false,
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
      {isWithRightChevron && (
        <img
          src="/icons/chevron-right_white.svg"
          alt=""
          draggable="false"
          data-slot="right-chevron"
        />
      )}
    </ButtonPrimitive>
  );
}

export { Button, buttonVariants };
