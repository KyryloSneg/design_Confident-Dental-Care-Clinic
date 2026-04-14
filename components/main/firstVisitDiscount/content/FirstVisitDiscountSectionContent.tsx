import FirstVisitDiscountSectionContentButton from "./FirstVisitDiscountSectionContentButton";

const FirstVisitDiscountSectionContent = () => {
  return (
    <section className="flex max-w-76.25 flex-col pt-20 max-tablet:items-center max-tablet:*:text-center first-visit-mobile-large-text:max-tablet:max-w-92.5 tablet:pt-9.75 tablet:pb-12.75 2md:max-lg:ml-(--2md-additional-px) lg:max-xl:ml-(--lg-additional-px) xl:max-w-154 xl:pt-15 xl:pb-14 2xl:ml-(--2xl-additional-px) 3xl:ml-(--3xl-additional-px) 4xl:ml-(--4xl-additional-px)">
      <p className="mb-2.25 font-jakarta text-s4-bold text-accent-orange-500 uppercase xl:mb-4.75 xl:text-s3-bold">
        Book dental appointment
      </p>
      <h2 className="mb-4 font-source-serif text-[2.3125rem] leading-[0.8] font-semibold tracking-[-0.04em] text-text-primary capitalize first-visit-mobile-large-text:max-tablet:mb-6.5 first-visit-mobile-large-text:max-tablet:text-[3rem] xl:mb-9 xl:text-h3-semibold xl:leading-[0.87]">
        Get{" "}
        <strong className="leading-normal tracking-[0.02em] text-primary-500 underline xl:text-[4.5rem]">
          10%-off
        </strong>{" "}
        your first visit
      </h2>
      <p className="mb-7.5 font-sans text-[0.9375rem] font-light text-text-primary max-first-visit-mobile-large-text:leading-[1.54] first-visit-mobile-large-text:max-tablet:text-b1-light tablet:max-xl:leading-[1.34] xl:text-b1-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </p>
      <FirstVisitDiscountSectionContentButton />
    </section>
  );
};

export default FirstVisitDiscountSectionContent;
