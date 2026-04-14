import { usePathname } from "next/navigation";
import type { UrlObject } from "url";

function useIsActiveLink(href: string | UrlObject): boolean {
  let hrefPathname: string | null | undefined = null;

  try {
    hrefPathname =
      typeof href === "string" ? new URL(href).pathname : href.pathname;
  } catch {}

  const pathname = usePathname();
  const isActive = pathname === hrefPathname;

  return isActive;
}

export default useIsActiveLink;
