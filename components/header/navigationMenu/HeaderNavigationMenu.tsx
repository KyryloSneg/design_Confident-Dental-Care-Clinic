import { UILink } from "@/components/ui/custom/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/shadcn/navigation-menu";
import HeaderNavigationListItem from "./HeaderNavigationListItem";
import HeaderSearch from "../HeaderSearch";

const navigationMenuItemTextClassName = "text-s4-bold";
const navigationMenuTriggerBaseClassName = "relative -mx-4 bottom-0.25";

function HeaderNavigationMenu() {
  return (
    <nav className="hidden w-full header-navigation-menu:block">
      <ul className="mx-x-grid grid grid-cols-[auto_1fr] items-center justify-between gap-4.5 rounded-full bg-secondary-200 px-13 py-3 min-[67.5em]:gap-10 xl:gap-23.75">
        <li>
          <NavigationMenu>
            <NavigationMenuList className="gap-9 xl:gap-11 desktop:gap-13.5">
              <NavigationMenuItem>
                <UILink
                  href="#"
                  variant="navigation"
                  className={navigationMenuItemTextClassName}
                  data-active="true" // for demo's sake
                >
                  Home
                </UILink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <UILink
                  href="#"
                  variant="navigation"
                  className={navigationMenuItemTextClassName}
                >
                  About Us
                </UILink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <UILink
                  href="#"
                  variant="navigation"
                  className={navigationMenuItemTextClassName}
                >
                  Services
                </UILink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={navigationMenuTriggerBaseClassName}
                >
                  Pages
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul>
                    <HeaderNavigationListItem href="#">
                      Page 1
                    </HeaderNavigationListItem>
                    <HeaderNavigationListItem href="#">
                      Page 2
                    </HeaderNavigationListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={navigationMenuTriggerBaseClassName}
                >
                  Blog
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul>
                    <HeaderNavigationListItem href="#">
                      Blog page 1
                    </HeaderNavigationListItem>
                    <HeaderNavigationListItem href="#">
                      Blog page 2
                    </HeaderNavigationListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <UILink
                  href="#"
                  variant="navigation"
                  className={navigationMenuItemTextClassName}
                >
                  Contact
                </UILink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </li>
        <li className="flex justify-end">
          <HeaderSearch />
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavigationMenu;
