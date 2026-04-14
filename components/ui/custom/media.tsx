"use client";

import Link from "next/link";
import { Button } from "../shadcn/button";

export type MediaType = "instagram" | "facebook" | "linkedIn" | "x";

export interface MediaProps {
  type: MediaType;
  href: string;
}

type MediaTypeToSrc = Record<MediaType, string>;
const mediaTypeToSrc: MediaTypeToSrc = {
  instagram: "/icons/instagram.svg",
  facebook: "/icons/facebook.svg",
  linkedIn: "/icons/linked-in.svg",
  x: "/icons/twitter.svg",
};

const Media = ({ type, href }: MediaProps) => {
  return (
    <Button
      variant={type === "facebook" ? "default" : "outline"}
      size="icon-lg"
      nativeButton={false}
      render={props => <Link {...props} href={href} />}
    >
      <img
        src={mediaTypeToSrc[type]}
        alt={`${type[0].toUpperCase()}${type.slice(1)}`}
        draggable="false"
        className="text-[0.5rem]"
      />
    </Button>
  );
};

export default Media;
