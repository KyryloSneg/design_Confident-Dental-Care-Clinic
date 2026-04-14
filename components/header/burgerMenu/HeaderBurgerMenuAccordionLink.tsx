"use client";

import useIsActiveLink from "@/hooks/useIsActiveLink";
import Link, { type LinkProps } from "next/link";

type NextLinkProps = {
  children: React.ReactNode;
  className?: string;
} & LinkProps;

const HeaderBurgerMenuAccordionLink = ({
  children,
  href,
  ...props
}: NextLinkProps) => {
  const isActive = useIsActiveLink(href);

  return (
    <Link
      href={href}
      className={
        "accordion-trigger-ring border-b border-primary-100 p-(--burger-menu-item-padding) accordion-trigger-text select-none hover:text-text-accordion-interacted data-active:text-text-accordion-interacted"
      }
      data-active={isActive}
      {...props}
    >
      {children}
    </Link>
  );
};

export default HeaderBurgerMenuAccordionLink;
