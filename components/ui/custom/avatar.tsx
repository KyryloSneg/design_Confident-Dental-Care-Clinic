import Image, { ImageProps } from "next/image";
import { OptionalField } from "@/utils/ts-util-types";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const avatarVariants = cva("inline-flex items-center justify-center", {
  variants: {
    variant: {
      default: "shadow-default-avatar bg-bg-secondary",
      secondary: "shadow-rect-avatar bg-secondary-200",
      tersier: "shadow-default-avatar bg-bg-tersier",
    },
    shape: {
      default: "rounded-full aspect-square [&>img]:rounded-full",
      rect: "rounded-avatar-rect [&>img]:rounded-avatar-rect size-auto [&>img]:w-auto p-1.5",
    },
    size: {
      default: "size-12.5 [&>img]:size-10.75",
      xs: "size-7 [&>img]:size-6",
      sm: "size-17.75",
      lg: "size-17.75 [&>img]:size-14.75",
      xl: "size-22 [&>img]:size-19",
      "2xl": "size-23.5 [&>img]:size-20.25",
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
        "hero-section-large-col:size-19 hero-section-large-col:[&>img]:size-16.5",
    },
    {
      size: "xs",
      responsiveMode: "heroSection",
      className: "hero-section-large-col:size-7",
    },
    {
      size: "lg",
      responsiveMode: "heroSection",
      className: "hero-section-large-col:size-25",
    },
    {
      size: "xl",
      responsiveMode: "heroSection",
      className: "hero-section-large-col:size-26",
    },
    {
      size: "xs",
      responsiveMode: "aboutUsSection",
      className: "tablet:size-8 tablet:[&>img]:size-7",
    },
    {
      size: "xl",
      responsiveMode: "clientReviewsSection",
      className: "tablet:size-25 tablet:[&>img]:size-21.5",
    },
    {
      size: "2xl",
      responsiveMode: "clientReviewsSection",
      className: "tablet:size-26.75 tablet:[&>img]:size-23",
    },
  ],
  defaultVariants: {
    variant: "default",
    shape: "default",
    size: "default",
  },
});

interface AvatarPropsWithRequiredAlt extends ImageProps {
  wrapperProps?: ComponentProps<"div">;
}

type AvatarProps = OptionalField<AvatarPropsWithRequiredAlt, "alt">;

const Avatar = ({
  src,
  variant = "default",
  shape = "default",
  size = "default",
  responsiveMode = "default",
  width = 76,
  height = 76,
  wrapperProps = {},
  ...props
}: AvatarProps & VariantProps<typeof avatarVariants>) => {
  return (
    <div
      {...wrapperProps}
      className={avatarVariants({
        variant,
        shape,
        size,
        responsiveMode,
        className: wrapperProps.className,
      })}
    >
      <Image
        src={src}
        alt=""
        width={width}
        height={height}
        draggable="false"
        {...props}
      />
    </div>
  );
};

export default Avatar;
