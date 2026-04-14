import Image from "next/image";
import Link from "next/link";

export interface PartnerLinkProps {
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const PartnerLink = ({ href, src, alt, width, height }: PartnerLinkProps) => {
  return (
    <Link href={href}>
      <Image
        src={src}
        alt={alt}
        draggable="false"
        width={width}
        height={height}
      />
    </Link>
  );
};

export default PartnerLink;
