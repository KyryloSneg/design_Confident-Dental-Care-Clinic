import Image from "next/image";

const FirstVisitDiscountSectionIllustration = () => {
  return (
    <div
      className="pointer-events-none relative flex h-full w-full justify-center tablet:absolute tablet:inset-y-0 tablet:right-(--tablet-px) tablet:max-w-[255px] 2md:max-lg:right-[calc(var(--tablet-px)+var(--2md-additional-px))] lg:max-xl:right-[calc(var(--tablet-px)+var(--lg-additional-px))] xl:right-(--desktop-px) xl:max-w-[362px] 2xl:right-[calc(var(--desktop-px)+var(--2xl-additional-px))] 3xl:right-[calc(var(--desktop-px)+var(--3xl-additional-px))] 4xl:right-[calc(var(--desktop-px)+var(--4xl-additional-px))]"
      aria-hidden="true"
    >
      <Image
        src="/first-visit-discount-section-doctor.png"
        alt=""
        draggable="false"
        width={362}
        height={545}
        quality={90}
        sizes="(max-width: 769px) 302px, (max-width: 1280px) 255px, 362px"
        loading="eager"
        className="relative right-0 bottom-0 z-3 aspect-302/453 h-auto w-full max-tablet:max-w-[302px] tablet:absolute tablet:aspect-255/384 xl:aspect-362/545"
      />
      <div className="absolute inset-y-0 overflow-hidden max-tablet:-inset-x-(--mobile-px) max-tablet:w-[calc(100%+var(--mobile-px)*2)] max-tablet:max-w-111 max-tablet:justify-self-center max-tablet:rounded-b-(--rounded) tablet:-right-(--tablet-px) tablet:-left-20 tablet:max-2md:rounded-r-(--rounded) 2md:max-xl:right-[calc(var(--tablet-px)*-1-1.5rem)] 2md:max-xl:-left-18 xl:-right-(--desktop-px) xl:-left-30 xl:max-2xl:rounded-r-(--rounded) 2xl:right-[calc(var(--desktop-px)*-1-4rem)]">
        {/* our shadows are way too opaque, so no problem with sudden clipping (it's not visible anyway */}
        <div className="absolute -bottom-[6.84%] aspect-437/442 rounded-full bg-secondary-100 opacity-3 shadow-[-0.375rem_0_6rem_0_#3177e133] max-tablet:left-[1.36%] max-tablet:h-[97.57%] max-mobile:-left-[3.64%] max-xs:-left-[10.64%] tablet:-right-[3.00%] tablet:-bottom-[8.21%] tablet:aspect-369/373 tablet:w-[100.54%] 2md:right-0 xl:-right-[13.10%] xl:-bottom-[21.04%] xl:aspect-607/614 xl:w-[112.00%] 2xl:right-0 2xl:w-full" />
        <div className="absolute bottom-[0.66%] z-1 aspect-359/365 rounded-full bg-secondary-100 opacity-12 shadow-[-0.375rem_0_6rem_0_#3177e133] max-tablet:left-[9.32%] max-tablet:h-[78.59%] max-mobile:left-[4.32%] max-xs:-left-[3.68%] tablet:right-[6.81%] tablet:-bottom-[0.61%] tablet:aspect-303/309 tablet:w-[82.56%] xl:-right-[2.21%] xl:-bottom-[12.83%] xl:aspect-499/508 xl:w-[92.07%] 2xl:right-[10.89%] 2xl:w-[80.07%]" />
        <div className="absolute bottom-[5.52%] z-2 aspect-297/293 rounded-full bg-primary-100 opacity-20 shadow-[0_-1.6875rem_5.3125rem_0_#3177e1] max-tablet:left-[16.82%] max-tablet:h-[64.68%] max-mobile:left-[13.82%] max-xs:left-[5.82%] tablet:right-[13.60%] tablet:bottom-[6.69%] tablet:aspect-251/248 tablet:w-[68.39%] xl:right-[5.35%] xl:-bottom-[4.81%] xl:aspect-413/408 xl:w-[76.20%] 2xl:right-[18.45%] 2xl:w-[64.2%]" />
      </div>
    </div>
  );
};

export default FirstVisitDiscountSectionIllustration;
