import HeroSectionContentButtonGroup from "./HeroSectionContentButtonGroup";

const HeroSectionContent = () => {
  return (
    <section className="w-full max-w-108.25 hero-section-large-col:max-w-156.5 lg:max-w-202 hero-section-row:max-w-143.25">
      <p className="mb-6.25 font-jakarta text-s4-semibold text-accent-orange-500 uppercase hero-section-large-col:mb-7.5 hero-section-large-col:text-s3-bold">
        Welcome to Confident
      </p>
      <h2 className="mb-5 font-source-serif text-[2.3125rem] leading-[1.1] font-semibold tracking-[-0.04em] text-balance text-text-primary capitalize min-[27.5em]:text-[2.875rem] hero-section-large-col:text-[3.625rem] hero-section-row:text-[4.75rem]">
        High quality & <strong className="text-primary-500">painless</strong>{" "}
        dentistry
      </h2>
      <p className="mb-12.5 w-full max-w-[95%] font-sans text-[0.9375rem] leading-normal font-light text-pretty text-text-primary hero-section-large-col:mb-15 hero-section-large-col:text-b1-light hero-section-row:mb-16.5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua ut enim ad minim
        veniam, quis nostrud.
      </p>
      <HeroSectionContentButtonGroup />
    </section>
  );
};

export default HeroSectionContent;
