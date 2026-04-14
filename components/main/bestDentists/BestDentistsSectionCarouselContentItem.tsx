"use client";

import Media, { MediaType } from "@/components/ui/custom/media";
import { useCarousel } from "@/components/ui/shadcn/carousel";
import { entries } from "@/utils/ts-helpers";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import Image from "next/image";
import { useEffect, useState } from "react";
import { additionalDesktopTopSpace } from "./shared";

type MediaLinksInfo = Partial<Record<MediaType, string>>;

interface ImageInfo {
  src: string;
  width: number;
  height?: number;
}

export interface BestDentistsSectionCarouselContentItemProps {
  index: number;
  name: string;
  title: string;
  image: ImageInfo;
  mediaInfo: MediaLinksInfo;
}

const sectionVariants = {
  // hack to not show this animation on non-desktop breakpoints
  unselected: { "--translate-y": "0rem" } as any,
  hover: { "--translate-y": "0rem" } as any,
  selected: { "--translate-y": `-${additionalDesktopTopSpace}` } as any,
};

const textVariants = {
  unselected: { y: 0 },
  selected: { y: `-3.75rem` },
  hover: { y: `-3.75rem` },
};

const backgroundVariants = {
  unselected: { scaleY: 1 },
  selected: { scaleY: 1.65 },
  hover: { scaleY: 1.65 },
};

const iconVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.025, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const BestDentistsSectionCarouselContentItem = ({
  index,
  name,
  title,
  image,
  mediaInfo,
}: BestDentistsSectionCarouselContentItemProps) => {
  // the design shows that social media items are shown only on hover,
  // but in that case the mobile users won't see them at all, so show them on "selected" state too

  const { api } = useCarousel();

  const [isSelected, setIsSelected] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!api) return;

    const checkIsSelected = () => {
      setIsSelected(api.selectedScrollSnap() === index);
    };

    api.on("select", checkIsSelected);
    checkIsSelected();

    return () => {
      api.off("select", checkIsSelected);
    };
  }, [api, index]);

  return (
    <m.section
      variants={sectionVariants}
      initial={false}
      animate={isSelected ? "selected" : isHovered ? "hover" : "unselected"}
      className="relative flex w-full max-w-[min(100%,var(--slide-max-w))] pt-3.75 pr-4 pb-15.75 pl-3.75 desktop:translate-y-(--translate-y)"
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute inset-0 rounded-[0.9375rem] bg-secondary-300 opacity-25 shadow-[0_0_0.6875rem_0_#0000002e] inset-shadow-[0_0_0_1px_var(--color-secondary-100)]"
        onContextMenu={e => e.preventDefault()}
      />
      <Image
        src={image.src}
        alt=""
        draggable="false"
        width={image.width}
        height={image.height}
        quality={90}
        className="z-1 h-auto w-full"
        loading={index < 3 ? "eager" : "lazy"}
        style={{
          maxWidth: image.width,
          maxHeight: image.height,
        }}
        onContextMenu={e => e.preventDefault()}
      />
      <div className="absolute bottom-3.75 left-1/2 z-2 flex w-64.5 -translate-x-1/2 flex-col items-center p-5 *:text-center">
        <m.div
          variants={backgroundVariants}
          className="absolute inset-0 -z-1 origin-bottom rounded-[0.625rem] bg-secondary-100 shadow-[0_0_1.4375rem_0_#4a6ea54f]"
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        />
        <m.div
          variants={textVariants}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          <h3 className="mb-2 font-jakarta text-s3-semibold-caps text-nowrap text-primary-500 capitalize">
            {name}
          </h3>
          <p className="font-sans text-b2-light text-text-primary">{title}</p>
        </m.div>
        <AnimatePresence>
          {(isSelected || isHovered) && (
            <m.ul
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute bottom-5 flex gap-4.25 will-change-contents"
            >
              {entries(mediaInfo).map(
                ([key, value]) =>
                  value && (
                    <m.li key={key} variants={itemVariants}>
                      <Media type={key} href={value} />
                    </m.li>
                  ),
              )}
            </m.ul>
          )}
        </AnimatePresence>
      </div>
    </m.section>
  );
};

export default BestDentistsSectionCarouselContentItem;
