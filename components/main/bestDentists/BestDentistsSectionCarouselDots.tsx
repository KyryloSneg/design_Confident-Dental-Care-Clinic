"use client";

import { useCarousel } from "@/components/ui/shadcn/carousel";
import { useEffect, useRef, useState } from "react";
import {
  slideIdTemplate,
  slideIdTemplateStringToReplace,
  startIndex,
} from "./shared";
import itemsData from "./itemsData";

function getBreakpointBottom(baseValue: string): string {
  return `calc(calc(${baseValue} - var(--additional-slide-shadow-vertical-spacing)) * -1)`;
}

const BestDentistsSectionCarouselDots = () => {
  const ulRef = useRef<HTMLUListElement>(null);

  const { api } = useCarousel();
  const [selectedIndex, setSelectedIndex] = useState(startIndex);

  useEffect(() => {
    if (!api) return;

    const checkSelectedIndex = () => {
      const nextSelectedIndex = api.selectedScrollSnap();

      setSelectedIndex(curr => {
        if (nextSelectedIndex !== curr) {
          if (ulRef.current?.contains(document.activeElement)) {
            // focus the new index' button if user has focus on one of the dot buttons
            const buttonToFocus: HTMLButtonElement | null =
              ulRef.current.querySelector(
                `[data-index="${nextSelectedIndex.toString()}"]`,
              );

            buttonToFocus?.focus();
          }
        }

        return nextSelectedIndex;
      });
    };

    api.on("select", checkSelectedIndex);
    checkSelectedIndex();

    return () => {
      api.off("select", checkSelectedIndex);
    };
  }, [api]);

  return (
    <nav
      className="absolute inset-x-0 bottom-(--mobile-bottom) flex w-full justify-center tablet:bottom-(--tablet-bottom) desktop:bottom-(--desktop-bottom)"
      style={
        {
          "--mobile-bottom": getBreakpointBottom("3.125rem"),
          "--tablet-bottom": getBreakpointBottom("3.8125rem"),
          "--desktop-bottom": getBreakpointBottom("3.75rem"),
        } as React.CSSProperties
      }
    >
      <ul
        className="flex items-center gap-4"
        role="tablist"
        aria-label="Carousel pagination"
        ref={ulRef}
      >
        {Array.from({ length: itemsData.length }).map((_, i) => (
          // we don't really need "listitem" role here, just show pure tabs
          <li key={i} role="presentation">
            <button
              tabIndex={i === selectedIndex ? 0 : -1}
              className="size-3.5 cursor-pointer rounded-full bg-accent-orange-200 transition-[background-color,opacity] disabled:cursor-auto disabled:opacity-50 data-selected:w-13 data-selected:bg-accent-orange-500"
              aria-label={`Go to slide ${i + 1}`}
              role="tab"
              aria-controls={slideIdTemplate.replace(
                slideIdTemplateStringToReplace,
                i.toString(),
              )}
              aria-selected={i === selectedIndex}
              data-selected={i === selectedIndex}
              data-index={i}
              disabled={!api}
              onClick={() => {
                api?.scrollTo(i);
                api?.plugins().autoplay?.stop();
              }}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BestDentistsSectionCarouselDots;
