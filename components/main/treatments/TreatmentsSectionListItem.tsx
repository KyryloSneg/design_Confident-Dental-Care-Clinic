import Badge from "@/components/ui/custom/badge";
import { UILink } from "@/components/ui/custom/link";
import { cn } from "@/utils/shadcn";

interface BadgeProps {
  src: string;
  width?: number;
  height?: number;
  bgClassName: string;
}

export interface TreatmentsSectionListItemProps {
  index: number;
  badgeProps: BadgeProps;
  headingText: string;
  paragraphText: string;
  href: string;
}

const paragraphBaseClassName =
  "font-sans text-b1-light text-pretty text-text-primary max-desktop:not-data-first:leading-[1.33] mobile:text-wrap";

const TreatmentsSectionListItem = ({
  index,
  badgeProps,
  headingText,
  paragraphText,
  href,
}: TreatmentsSectionListItemProps) => {
  const isFirst = index === 0;
  const isSecond = index === 1;
  const isThird = index === 2;
  const isFourth = index === 3;

  const isBigMobilePadding = isFirst || isThird || isFourth;
  const isDesktopBig = isFirst || isSecond;

  return (
    <section
      className="flex h-full flex-col rounded-[0.9375rem] bg-secondary-100 pt-7.5 pr-5.5 pb-5.75 pl-7.5 tablet:pr-8.25 tablet:pb-9.5 desktop:pr-16 desktop:pb-8.5 desktop:shadow-[0_0_1.25rem_0_#3255890d] data-first:shadow-[0_0_1.875rem_0_#32558930] tablet:data-first:pr-16.25 tablet:data-first:pb-8.5 max-tablet:data-big-mobile-p:pb-9.5 desktop:data-desktop-big:pr-13.25"
      data-first={isFirst}
      data-second={isSecond}
      data-big-mobile-p={isBigMobilePadding}
      data-desktop-big={isDesktopBig}
    >
      <Badge
        src={badgeProps.src}
        width={badgeProps.width}
        height={badgeProps.height}
        size="xl"
        shape="rect"
        wrapperProps={{
          className: cn(
            "mb-7.5 shadow-[0_0_0.625rem_0_#3177E129]",
            badgeProps.bgClassName,
            (badgeProps.width !== undefined ||
              badgeProps.height !== undefined) &&
              "[&>img]:size-auto",
          ),
        }}
      />
      <div
        className="mb-7.5 flex max-w-81.25 flex-col gap-5 tablet:max-3md:not-data-first:max-w-55.75 tablet:max-3md:not-data-first:*:text-[0.9375rem]! desktop:max-w-68.25 2xl:max-w-77 data-first:max-w-91 tablet:data-first:max-w-132.5 desktop:data-desktop-big:max-w-124.25 2xl:data-desktop-big:max-w-134"
        data-first={isFirst}
        data-second={isSecond}
        data-desktop-big={isDesktopBig}
      >
        <h3 className="font-jakarta text-s3-bold text-text-primary uppercase">
          {headingText}
        </h3>
        {/* change content of the 2nd card on the desktop breakpoint just for demo's sake */}
        <p
          className={cn(
            paragraphBaseClassName,
            "block desktop:data-second:hidden",
          )}
          data-first={isFirst}
          data-second={isSecond}
        >
          {paragraphText}
        </p>
        <p
          className={cn(
            paragraphBaseClassName,
            "hidden desktop:data-second:block",
          )}
          data-first={isFirst}
          data-second={isSecond}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
      </div>
      <UILink
        href={href}
        size="sm"
        isWithRightChevron={true}
        className="mt-auto"
      >
        Learn more
      </UILink>
    </section>
  );
};

export default TreatmentsSectionListItem;
