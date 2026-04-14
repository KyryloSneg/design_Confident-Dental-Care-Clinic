"use client";

import { Button } from "@/components/ui/shadcn/button";
import Link from "next/link";

const FirstVisitDiscountSectionContentButton = () => {
  return (
    <Button
      isWithRightChevron={true}
      nativeButton={false}
      render={props => <Link {...props} href="#" />}
      className="w-max pr-7 pl-7.25 xl:pr-6.5 xl:pl-7"
    >
      Book now
    </Button>
  );
};

export default FirstVisitDiscountSectionContentButton;
