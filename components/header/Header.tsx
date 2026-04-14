import Link from "next/link";
import HeaderBurgerMenu from "./burgerMenu/HeaderBurgerMenu";
import HeaderSearch from "./HeaderSearch";
import HeaderAddress from "./HeaderAddress";
import { Button } from "../ui/shadcn/button";
import HeaderBurgerMenuNavigation from "./burgerMenu/HeaderBurgerMenuNavigation";
import HeaderNavigationMenu from "./navigationMenu/HeaderNavigationMenu";

const Header = () => {
  return (
    <header className="mb-16 flex flex-col gap-7.5 tablet:mb-15 desktop:mb-28">
      <div className="flex w-full items-center gap-8 border-b border-primary-100 px-x-grid pt-5.75 pb-4.75">
        <nav className="w-full">
          <ul className="grid grid-cols-[auto_auto_1fr] items-center gap-4 xs:gap-6.25 header-navigation-menu:grid-cols-[auto_1fr]">
            <li className="header-navigation-menu:hidden">
              <HeaderBurgerMenu
                navigationChildren={<HeaderBurgerMenuNavigation />}
                addressChildren={
                  <HeaderAddress
                    extendedAddressClassName="w-full flex justify-center border-b border-primary-100 p-(--burger-menu-item-padding) pt-5"
                    extendedUlClassName="w-full max-w-240 flex-wrap justify-between gap-7.5"
                    extendedLiClassName="text-[0.9375rem] min-[23.75rem]:text-[1.1875rem] font-sans font-light leading-[normal] tracking-[0.02em] text-balance"
                  />
                }
              />
            </li>
            <li>
              <Link href="#">
                <h1>
                  <img
                    src="/logo.svg"
                    alt="Confident"
                    draggable="false"
                    className="h-[28px] w-[90px] xs:w-[109px] tablet:h-[37px] tablet:h-[44px] tablet:w-[141px] header-navigation-menu:w-[163px]"
                  />
                </h1>
              </Link>
            </li>
            <li className="flex justify-end 2sm:ml-5 tablet:ml-24.5 header-navigation-menu:hidden">
              <HeaderSearch />
            </li>
          </ul>
        </nav>
        <div className="hidden items-center justify-end gap-12.25 header-navigation-menu:flex">
          <HeaderAddress />
          <Button>Appointment</Button>
        </div>
      </div>
      <HeaderNavigationMenu />
    </header>
  );
};

export default Header;
