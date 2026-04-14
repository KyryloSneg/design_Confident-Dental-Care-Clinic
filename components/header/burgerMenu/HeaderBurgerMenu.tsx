"use client";

import BurgerMenuIcon from "@/components/ui/custom/icons/BurgerMenuIcon";
import CloseIcon from "@/components/ui/custom/icons/CloseIcon";
import { Button } from "@/components/ui/shadcn/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/shadcn/drawer";
import { useState } from "react";

function HeaderBurgerMenu({
  // getting benefits of SSR
  navigationChildren,
  addressChildren,
}: {
  navigationChildren: React.ReactNode;
  addressChildren: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Drawer direction="left" open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          size="icon"
          variant="secondary"
          className="rounded-none max-2xs:size-6 [&_rect]:fill-primary-500 [&_rect]:transition-colors hover:[&_rect]:fill-primary-400 [&>svg]:h-[17px] [&>svg]:w-[20px] [&>svg]:2xs:w-[27px]"
        >
          <span className="sr-only">Menu</span>
          <BurgerMenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent
        className="grid max-w-none! grid-rows-[auto_1fr_auto] select-text! before:border-0 data-[vaul-drawer-direction=left]:w-full! mobile:data-[vaul-drawer-direction=left]:w-[82.71%]! mobile:data-[vaul-drawer-direction=left]:max-w-99.25! tablet:data-[vaul-drawer-direction=left]:w-[80.23%]! tablet:data-[vaul-drawer-direction=left]:max-w-154.25!"
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          // just for demonstration's sake: close on link click
          // (in the real app, we would've been listening to pathname change)
          const target = e.target as HTMLElement;
          if (target.closest("a")) setOpen(false);
        }}
      >
        <DrawerHeader className="flex flex-row items-center justify-between gap-2">
          <DrawerTitle>
            <img
              src="/logo.svg"
              alt="Confident"
              draggable="false"
              className="h-[37px] w-[141px]"
            />
          </DrawerTitle>
          <DrawerDescription className="sr-only">Menu</DrawerDescription>
          <DrawerClose asChild className="mobile:max-tablet:hidden">
            <Button
              size="icon"
              variant="secondary"
              className="rounded-none [&_rect]:fill-primary-500 [&_rect]:transition-colors hover:[&_rect]:fill-primary-400"
            >
              <CloseIcon />
            </Button>
          </DrawerClose>
        </DrawerHeader>
        {navigationChildren}
        <DrawerFooter className="flex w-full flex-col items-center gap-15 p-0 pb-15">
          {addressChildren}
          <Button size="xl">Appointment</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default HeaderBurgerMenu;
