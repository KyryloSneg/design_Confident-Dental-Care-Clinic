"use client";

import { CarouselContent, CarouselItem } from "@/components/ui/shadcn/carousel";
import BestDentistsSectionCarouselContentItem from "./BestDentistsSectionCarouselContentItem";
import {
  additionalDesktopTopSpace,
  slideIdTemplate,
  slideIdTemplateStringToReplace,
  startIndex,
} from "./shared";
import itemsData from "./itemsData";
import { useEffect, useState } from "react";

const BestDentistsSectionCarouselContent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // i don't know why does this work
    setIsClient(true);
  }, []);

  return (
    <CarouselContent
      className="mt-(--mobile-mt) -ml-(--slide-gap-x) pb-(--additional-slide-shadow-vertical-spacing) not-data-client:transform-(--mobile-initial-transform) tablet:mt-(--tablet-mt) not-data-client:best-dentists-2-cols:transform-(--2-cols-initial-transform) desktop:mt-(--desktop-mt) desktop:pt-(--desktop-pt) desktop:not-data-client:transform-(--desktop-initial-transform)"
      style={
        {
          "--mobile-mt": "5rem",
          "--tablet-mt": "7rem",
          "--desktop-mt": "calc(6.875rem - var(--desktop-pt))",
          // space used for the desktop selected item's ascending (in order to evade undesired overflow-hidden crop)
          "--desktop-pt": additionalDesktopTopSpace,
          // apply initial transform to prevent horizontal layout shift (overridden by embla's engine on hydration)
          "--mobile-initial-transform": `translate3d(-${startIndex * 100}%, 0px, 0px)`,
          "--2-cols-initial-transform": `translate3d(-${startIndex * 50}%, 0px, 0px)`,
          // untested:
          "--desktop-initial-transform": `translate3d(-${Math.max(startIndex - 1, 0) * 33.33}%, 0px, 0px)`,
        } as React.CSSProperties
      }
      data-client={isClient}
    >
      {itemsData.map((item, i) => (
        <CarouselItem
          role="tabpanel"
          id={slideIdTemplate.replace(
            slideIdTemplateStringToReplace,
            i.toString(),
          )}
          className="flex basis-[clamp(0px,100%,calc(var(--slide-max-w)+var(--slide-gap-x)))] pl-(--slide-gap-x)"
          key={`${item.name}-${item.title}-${item.image.src}`}
        >
          <BestDentistsSectionCarouselContentItem index={i} {...item} />
        </CarouselItem>
      ))}
    </CarouselContent>
  );
};

export default BestDentistsSectionCarouselContent;
