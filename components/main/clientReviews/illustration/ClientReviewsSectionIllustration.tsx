import Avatar from "@/components/ui/custom/avatar";
import Badge from "@/components/ui/custom/badge";
import CheckmarkIcon from "@/components/ui/custom/icons/CheckmarkIcon";

const ClientReviewsSectionIllustration = () => {
  return (
    <div
      className="pointer-events-none relative aspect-347/360 w-full max-w-86.75 select-none tablet:aspect-394/409 tablet:max-w-98.5 client-reviews-row:top-2 client-reviews-row:left-2.75"
      aria-hidden="true"
    >
      <Badge
        src="/icons/message-circle.svg"
        border="secondary"
        size="default"
        responsiveMode="clientReviewsSection"
        wrapperProps={{
          className:
            "bg-primary-300 absolute -right-[3.75%] bottom-[28.06%] tablet:-right-[3.81%] tablet:bottom-[28.12%] z-3 client-reviews-primary-badge-shadow",
        }}
      />
      <Badge
        src="/icons/message-circle_fill.svg"
        variant="accentYellow"
        border="secondary"
        size="lg"
        responsiveMode="clientReviewsSection"
        wrapperProps={{
          className:
            "absolute left-[28.82%] top-[10.83%] tablet:left-[28.80%] tablet:top-[11.00%] z-3 client-reviews-yellow-badge-shadow",
        }}
      />
      <div className="absolute top-[10.00%] right-0 z-3 flex items-end gap-1 xs:top-[18.00%] 2sm:top-[20.00%] 2sm:-right-[10.66%] tablet:top-[20.05%]">
        <p className="h-max overflow-hidden rounded-[0.375rem] bg-secondary-100 pt-2.75 pr-4.75 pb-3.5 pl-3.5 font-sans text-[0.875rem] leading-[0.79] font-medium text-nowrap text-text-primary capitalize shadow-[0_0_1.25rem_1px_#153a731c] tablet:pt-3.25 tablet:pr-8 tablet:pb-4 tablet:pl-4 tablet:text-[0.9375rem] tablet:leading-[0.73]">
          Very good experience...
        </p>
        <div className="relative mb-5.5 h-max tablet:mb-6.25">
          <Avatar
            src="/avatar_man-in-blue.png"
            width={92}
            height={92}
            quality={90}
            size="2xl"
            responsiveMode="clientReviewsSection"
          />
          <Badge
            size="4sm"
            responsiveMode="clientReviewsSection"
            wrapperProps={{
              className: "absolute bottom-0 left-1",
            }}
          >
            <CheckmarkIcon />
          </Badge>
        </div>
      </div>
      <div className="absolute bottom-[10.00%] left-0 z-3 flex items-end gap-2.25 xs:bottom-[15.00%] 2sm:bottom-[20.56%] 2sm:-left-[8.93%] tablet:bottom-[20.54%] tablet:-left-[8.88%] tablet:gap-2.5">
        <div className="relative mb-3 h-max tablet:mb-3.25">
          <Avatar
            src="/avatar_man-in-yellow.png"
            width={92}
            height={92}
            quality={90}
            size="xl"
            responsiveMode="clientReviewsSection"
            wrapperProps={{ className: "shadow-[0_0_0.8125rem_0_#00000014]!" }}
          />
          <Badge
            size="5sm"
            responsiveMode="clientReviewsSection"
            wrapperProps={{
              className: "absolute bottom-0 right-0",
            }}
          >
            <CheckmarkIcon />
          </Badge>
        </div>
        <p className="h-max overflow-hidden rounded-[0.375rem] bg-secondary-100 pt-2.75 pr-4.5 pb-3 pl-3.75 font-sans text-[0.875rem] leading-[0.79] font-medium text-nowrap text-text-primary capitalize shadow-[0_0_1.25rem_1px_#153a731c] tablet:pt-3.5 tablet:pr-7.25 tablet:pb-3.25 tablet:pl-4.25 tablet:text-[0.9375rem] tablet:leading-[0.73]">
          Very good service...
        </p>
      </div>
      <div className="absolute inset-0 rounded-full bg-secondary-100 opacity-13 shadow-[-0.375rem_0_6rem_0_#3177e154]" />
      <div className="absolute inset-y-[13.33%] right-[13.26%] left-[12.39%] z-1 rounded-full bg-secondary-100 opacity-35 shadow-[-0.375rem_0_6rem_0_#3177e133] tablet:inset-y-[13.45%] tablet:right-[13.20%] tablet:left-[12.18%]" />
      <div className="absolute top-[25.56%] right-[26.22%] bottom-[25.28%] left-[24.50%] z-2 rounded-full bg-secondary-100 opacity-15 shadow-[0_0_3.75rem_0_#3177e178] tablet:top-[25.43%] tablet:right-[26.14%] tablet:bottom-[25.18%] tablet:left-[24.62%]" />
    </div>
  );
};

export default ClientReviewsSectionIllustration;
