"use client";

import useIsActiveLink from "@/hooks/useIsActiveLink";
import Link, { type LinkProps } from "next/link";

type NextLinkProps = {
  children: React.ReactNode;
  className?: string;
} & LinkProps;

const HeaderBurgerMenuAccordionContentLink = ({
  children,
  href,
  ...props
}: NextLinkProps) => {
  const isActive = useIsActiveLink(href);

  return (
    <Link
      href={href}
      className="data-active:text-text-accordion-content-interacted!"
      data-active={isActive}
      {...props}
    >
      {children}
    </Link>
  );
};

export default HeaderBurgerMenuAccordionContentLink;
