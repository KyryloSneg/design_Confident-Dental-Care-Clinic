import Image from "next/image";
import AboutUsSectionIllustrationEllipsis from "./AboutUsSectionIllustrationEllipsis";
import AboutUsSectionIllustrationDecorations from "./AboutUsSectionIllustrationDecorations";

const basePl = 8.79;

const AboutUsSectionIllustration = () => {
  return (
    <div
      // we are 100% sure that if "About Us" section is row, the card is always at full width, so during pl calculations use fraction of the max-width
      className="relative z-1 w-[calc(100%-var(--about-us-illustration-pl)-var(--about-us-illustration-pr))] max-w-(--base-mobile-max-w) mobile:w-full tablet:max-w-(--base-tablet-max-w) xl:box-content xl:pl-[calc(var(--about-us-illustration-base-pl)/100*var(--base-tablet-max-w)+var(--about-us-illustration-badge-right))]"
      style={
        {
          "--about-us-illustration-rounded": "1.375rem",
          "--about-us-illustration-base-pl": basePl,
          "--about-us-illustration-pl": `${basePl}%`,
          "--about-us-illustration-pr": `11.45%`,
          "--about-us-illustration-badge-right": "0.625rem",
          "--base-mobile-max-w": "20.625rem",
          "--base-tablet-max-w": "24.375rem",
        } as React.CSSProperties
      }
    >
      <div
        className="pointer-events-none relative aspect-330/369 w-full rounded-(--about-us-illustration-rounded) bg-primary-500 shadow-[0_0_1.4375rem_0_#4a6ea54f] select-none tablet:aspect-390/434 tablet:max-w-(--base-tablet-max-w)"
        aria-hidden="true"
      >
        <Image
          src="/about-us-doctor.png"
          alt=""
          draggable="false"
          width={309}
          height={475}
          quality={90}
          sizes="(max-width: 769px) 262px, 309px"
          loading="eager"
          className="absolute bottom-px left-1/2 z-1 aspect-309/475 h-auto w-[79.23%] -translate-x-1/2 justify-self-center"
        />
        <AboutUsSectionIllustrationEllipsis />
        <AboutUsSectionIllustrationDecorations />
        <div className="absolute inset-0 rounded-(--about-us-illustration-rounded) border border-accent-yellow-100" />
      </div>
    </div>
  );
};

export default AboutUsSectionIllustration;
