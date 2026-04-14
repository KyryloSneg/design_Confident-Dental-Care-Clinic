"use client";

import { NavigationMenuLink } from "@/components/ui/shadcn/navigation-menu";
import Link from "next/link";

const HeaderNavigationListItem = ({
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) => {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={props => (
          <Link {...props} href={href}>
            {children}
          </Link>
        )}
      />
    </li>
  );
};

export default HeaderNavigationListItem;
