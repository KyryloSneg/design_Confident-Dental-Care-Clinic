import { UILink } from "@/components/ui/custom/link";
import { cn } from "@/utils/shadcn";
import Image from "next/image";

export interface ImageData {
  src: string;
  // aspect ratio data:
  width: number;
  height: number;
  aspectRatioClassName: string;
  filtersClassName?: string;
  imagePositionClassName?: string;
}

export interface BlogSectionListItemProps {
  date: Date | string | number;
  heading: string;
  href: string;
  image: ImageData;
  isBigItem?: boolean;
  gradientOpacityClassName?: string;
}

const dateOptions: Intl.DateTimeFormatOptions = {
  month: "long",
  day: "numeric",
  year: "numeric",
};

const BlogSectionListItem = ({
  date,
  heading,
  href,
  image,
  isBigItem = false,
  gradientOpacityClassName = undefined,
}: BlogSectionListItemProps) => {
  const dateObj = date instanceof Date ? date : new Date(date);

  const dateTime = dateObj.toISOString().split("T")[0];
  const formattedDate = dateObj.toLocaleDateString("en-US", dateOptions);

  return (
    <article
      className={cn(
        "relative flex size-full min-h-max flex-col justify-end gap-7.5 overflow-hidden rounded-[1.25rem]",
        isBigItem && "shadow-[0_0.25rem_0.8125rem_0_#0e295166]",
        isBigItem
          ? "py-9.5 pr-4.5 pl-7.5 tablet:py-12 tablet:pr-35.75 tablet:pl-10 blog-section-row:py-12 blog-section-row:pr-27.5 blog-section-row:pl-10"
          : "py-8.25 pr-4.5 pl-7.5 tablet:py-9.5 tablet:pr-34.25 tablet:pl-11.5 blog-section-row:pr-30.25 blog-section-row:pl-7.5",
      )}
    >
      <div className="relative z-2 flex max-w-92 flex-col gap-3.75 tablet:max-w-110.25 tablet:gap-6">
        <time
          dateTime={dateTime}
          className="font-sans text-b2-medium-normal text-primary-200 max-mobile:text-[0.875rem]"
        >
          {formattedDate}
        </time>
        <h3 className="font-sans text-b1-medium text-pretty text-secondary-100 max-mobile:text-[0.9375rem]">
          {heading}
        </h3>
      </div>
      <UILink
        href={href}
        size="sm"
        isWithRightChevron={true}
        className="relative z-2"
      >
        Read more
      </UILink>
      <Image
        src={image.src}
        alt=""
        draggable="false"
        width={image.width}
        height={image.height}
        // an overkill but let it be
        sizes="(max-width: 740px) 100vw, (max-width: 769px) 661px, (max-width: 821px) 100vw, (max-width: 1320px) 661px, (max-width: 1600px) 50vw, 661px"
        loading="eager"
        className={cn(
          image.aspectRatioClassName,
          image.filtersClassName,
          image.imagePositionClassName,
          "absolute inset-0 z-0 size-full object-cover",
        )}
      />
      <div
        className={cn(
          "bg-linear pointer-events-none absolute inset-0 z-1 bg-linear-to-t from-secondary-500 to-[#ffffff33] opacity-32",
          isBigItem ? "-top-[51%]" : "top-[0%] tablet:-top-[36%]",
          gradientOpacityClassName,
        )}
      />
    </article>
  );
};

export default BlogSectionListItem;
