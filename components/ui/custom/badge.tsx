import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

import { cn } from "@/utils/shadcn";
import { XOR } from "@/utils/ts-util-types";

const avatarVariants = cva(
  "relative z-1 inline-flex items-center justify-center aspect-square border-secondary-100 badge-shadow",
  {
    variants: {
      variant: {
        default: "bg-primary-500 badge-primary-outline",
        accentLighterYellow: "bg-accent-yellow-450",
        accentYellow: "bg-accent-yellow-500 badge-primary-outline",
        accentOrange: "bg-accent-orange-500 badge-accent-orange-outline",
      },
      border: {
        default: "border-0",
        primary: "badge-primary-border",
        secondary: "badge-secondary-border",
      },
      outline: {
        false: "outline-none",
        true: "outline-5 outline-(--badge-outline-color)",
      },
      shape: {
        default: "rounded-full",
        rect: "rounded-avatar-rect w-auto",
      },
      size: {
        // do not try to seek any logical excuses to these values.
        // relative values ("greater / smaller") are taken from MOBILE design
        default: "size-10.5 *:size-6",
        xs: "size-4.75 *:size-3.75",
        "2xs": "size-3.5 *:size-2.5",
        "3xs": "size-3.75 *:size-2.75",
        "5sm": "size-6 *:size-4.5",
        "4sm": "size-6.5 *:size-5",
        "3sm": "size-7.75 *:size-3.25",
        "2sm": "size-8 *:size-4",
        sm: "size-8.5 *:size-6",
        lg: "size-12 *:size-7",
        xl: "size-21.5 *:size-16",
      },
      responsiveMode: {
        default: "",
        heroSection: "",
        aboutUsSection: "",
        clientReviewsSection: "",
      },
    },
    compoundVariants: [
      {
        size: "default",
        responsiveMode: "heroSection",
        className:
          "hero-section-large-col:size-12 hero-section-large-col:*:size-7",
      },
      {
        size: "xs",
        responsiveMode: "heroSection",
        className:
          "hero-section-large-col:size-7.25 hero-section-large-col:*:size-5.75",
      },
      {
        size: "2xs",
        responsiveMode: "heroSection",
        className:
          "hero-section-large-col:size-5.5 hero-section-large-col:*:size-4",
      },
      {
        size: "3sm",
        responsiveMode: "heroSection",
        className:
          "hero-section-large-col:size-12 hero-section-large-col:*:size-5",
      },
      {
        size: "2sm",
        responsiveMode: "heroSection",
        className:
          "hero-section-large-col:size-12.5 hero-section-large-col:*:size-6",
      },
      {
        size: "sm",
        responsiveMode: "heroSection",
        className:
          "hero-section-large-col:size-10.5 hero-section-large-col:*:size-7.5",
      },
      {
        size: "sm",
        responsiveMode: "heroSection",
        className:
          "hero-section-large-col:size-10.5 hero-section-large-col:*:size-7.5",
      },
      {
        size: "lg",
        responsiveMode: "heroSection",
        className:
          "hero-section-large-col:size-13.5 hero-section-large-col:*:size-8",
      },
      {
        outline: true,
        responsiveMode: "heroSection",
        className: "hero-section-row:outline-8",
      },
      {
        size: "4sm",
        responsiveMode: "aboutUsSection",
        className: "tablet:size-7.5 tablet:*:size-5",
      },
      {
        size: "default",
        responsiveMode: "clientReviewsSection",
        className: "*:w-6.5 *:h-6 tablet:size-12 tablet:*:w-7.25 tablet:*:h-7",
      },
      {
        size: "default",
        responsiveMode: "clientReviewsSection",
        className:
          "w-10.5 h-10.75 *:w-6.5 *:h-6 *:ml-0.5 desktop:*:ml-px tablet:h-12.25 tablet:w-12 tablet:*:w-7.25 tablet:*:h-7",
      },
      {
        size: "5sm",
        responsiveMode: "clientReviewsSection",
        className: "tablet:size-7 tablet:*:size-5",
      },
      {
        size: "4sm",
        responsiveMode: "clientReviewsSection",
        className: "tablet:size-7.5 tablet:*:size-5.5",
      },
      {
        size: "lg",
        responsiveMode: "clientReviewsSection",
        className:
          "w-11.75 h-12 *:w-7.25 *:h-6.75 *:ml-0.5 desktop:*:ml-px tablet:h-13.75 tablet:w-13.25 tablet:*:w-8.25 tablet:*:h-7.75",
      },
    ],
    defaultVariants: {
      variant: "default",
      border: "default",
      outline: false,
      shape: "default",
      size: "default",
    },
  },
);

type BaseBadgeProps = ComponentProps<"img"> & {
  wrapperProps?: ComponentProps<"div">;
} & VariantProps<typeof avatarVariants>;

type BadgeProps = BaseBadgeProps &
  XOR<
    { src: string; alt?: string } & Omit<ComponentProps<"img">, "children">,
    { children: React.ReactNode }
  >;

const Badge = ({
  variant = "default",
  border = "default",
  outline = false,
  shape = "default",
  size = "default",
  responsiveMode = "default",
  wrapperProps = {},
  ...props
}: BadgeProps) => {
  return (
    <div
      {...wrapperProps}
      className={cn(
        avatarVariants({
          variant,
          border,
          outline,
          shape,
          size,
          responsiveMode,
          className: wrapperProps.className,
        }),
      )}
    >
      {props.children ?? (
        <img src={props.src} alt="" draggable="false" {...props} />
      )}
    </div>
  );
};

export default Badge;
