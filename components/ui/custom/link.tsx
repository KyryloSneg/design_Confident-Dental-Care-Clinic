"use client";

import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/shadcn";
import Link, { LinkProps } from "next/link";
import useIsActiveLink from "@/hooks/useIsActiveLink";
import ChevronRightIcon from "./icons/ChevronRightIcon";

const linkVariants = cva(
  "group/link w-max inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow,transform] focus-visible:border-ring [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_path]:transition-colors uppercase",
  {
    variants: {
      variant: {
        default:
          "text-primary-400 [&_path]:stroke-primary-400 data-active:text-primary-500 data-active:[&_path]:stroke-primary-500 hover:text-primary-500 hover:[&_path]:stroke-primary-500 uppercase font-jakarta",
        navigation:
          "text-text-primary data-active:text-primary-500 hover:text-primary-500 capitalize font-jakarta",
      },
      size: {
        default: "text-s3-semibold gap-4",
        sm: "text-s4-semibold gap-2",
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
  children,
  className,
  variant = "default",
  size = "default",
  isWithRightChevron = false,
  ...props
}: NextLinkProps & { isWithRightChevron?: boolean } & VariantProps<
    typeof linkVariants
  >) {
  const isActive = useIsActiveLink(props.href);

  return (
    <Link
      data-slot="link"
      className={cn(linkVariants({ variant, size, className }))}
      data-active={isActive}
      {...props}
    >
      {children}
      {isWithRightChevron && <ChevronRightIcon />}
    </Link>
  );
}

export { UILink, linkVariants };
