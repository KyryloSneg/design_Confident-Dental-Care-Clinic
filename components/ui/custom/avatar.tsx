import { cn } from "@/utils/shadcn";
import Image, { ImageProps } from "next/image";
import { OptionalField } from "@/utils/ts-util-types";

interface AvatarPropsWithRequiredAlt extends ImageProps {
  bgColor?: string;
}

type AvatarProps = OptionalField<AvatarPropsWithRequiredAlt, "alt">;

const Avatar = ({
  src,
  bgColor = undefined,
  width = 48,
  height = 48,
  ...props
}: AvatarProps) => {
  return (
    <Image
      src={src}
      alt=""
      width={width}
      height={height}
      draggable="false"
      {...props}
      className={cn("aspect-square rounded-full object-cover")}
      style={{
        width,
        height,
        backgroundColor: bgColor,
        ...(props.style || {}),
      }}
    />
  );
};

export default Avatar;
