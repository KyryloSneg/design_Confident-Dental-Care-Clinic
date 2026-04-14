import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
  type CarouselOptions,
} from "@/components/ui/shadcn/carousel";
import BestDentistsSectionCarouselContent from "./BestDentistsSectionCarouselContent";
import BestDentistsSectionCarouselDots from "./BestDentistsSectionCarouselDots";
import { startIndex } from "./shared";
import { cn } from "@/utils/shadcn";
import itemsData from "./itemsData";

const opts: CarouselOptions = {
  align: "center",
  startIndex,
  loop: true,
  slidesToScroll: 1,
  watchSlides: true,
  breakpoints: {
    "(min: reduce)": { duration: 0 },
    "(min-width: 57.5em)": { align: "start" },
    "(min-width: 90em)": { align: "center" },
  },
};

const carouselButtonBaseClassName =
  "rotate-none top-[calc(50%+1.75rem)] z-1 -translate-y-1/2 tablet:top-[calc(50%+3.0625rem)] desktop:top-[calc(50%+2.0625rem)]";

const BestDentistsSectionCarousel = () => {
  return (
    <div className="relative flex w-full justify-center">
      <Carousel
        orientation="horizontal"
        opts={opts}
        autoPlay={true}
        className="static w-full max-w-(--mobile-max-w) best-dentists-2-cols:max-w-(--2-cols-max-w) desktop:max-w-(--desktop-max-w)"
        aria-label="Best Dentists"
        style={
          {
            "--mobile-carousel-btn-inset-horizontal": "-0.75rem",
            "--tablet-carousel-btn-inset-horizontal": "0rem",
            "--additional-slide-shadow-horizontal-spacing": "0.4375rem",
            "--additional-slide-shadow-vertical-spacing": "0.875rem",
            "--slide-pr": "1rem",
            "--slide-pl": "0.9375rem",
            "--slide-gap-x": "2.375rem",
            "--slide-max-w": `calc(${itemsData[0].image.width}px + var(--slide-pr) + var(--slide-pl))`,
            "--mobile-max-w": "calc(var(--slide-max-w))",
            "--2-cols-max-w":
              "calc(var(--slide-max-w) * 2 + var(--slide-gap-x))",
            "--desktop-max-w":
              "calc(var(--slide-max-w) * 3 + var(--slide-gap-x) * 2)",
          } as React.CSSProperties
        }
      >
        <BestDentistsSectionCarouselContent />
        <CarouselPrevious
          className={cn(
            carouselButtonBaseClassName,
            "left-(--mobile-carousel-btn-inset-horizontal) tablet:left-(--tablet-carousel-btn-inset-horizontal)",
          )}
          srOnlyText="Previous doctor"
        />
        <CarouselNext
          className={cn(
            carouselButtonBaseClassName,
            "right-(--mobile-carousel-btn-inset-horizontal) tablet:right-(--tablet-carousel-btn-inset-horizontal)",
          )}
          srOnlyText="Next doctor"
        />
        <BestDentistsSectionCarouselDots />
      </Carousel>
    </div>
  );
};

export default BestDentistsSectionCarousel;
