"use client";

import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/shadcn";
import Link, { LinkProps } from "next/link";

const linkVariants = cva(
  "group/link inline-flex shrink-0 items-center justify-center gap-[0.625rem] font-medium whitespace-nowrap transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow,transform] hover:[&>img]:opacity-80 [&>img]:transition-opacity focus-visible:border-ring [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 inset-shadow-none",
  {
    variants: {
      variant: {
        default: "hover:text-primary/80",
        destruction:
          "text-destructive hover:text-destructive/80 hover:[&>img]:opacity-80",
      },
      size: {
        default: "text-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type NextLinkProps = {
  children: React.ReactNode;
  className?: string;
} & LinkProps;

function UILink({
  className,
  variant = "default",
  size = "default",
  ...props
}: NextLinkProps & VariantProps<typeof linkVariants>) {
  return (
    <Link
      data-slot="link"
      className={cn(linkVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { UILink, linkVariants };
