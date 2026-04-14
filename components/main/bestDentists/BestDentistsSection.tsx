import BestDentistsSectionCarousel from "./BestDentistsSectionCarousel";

const BestDentistsSection = () => {
  return (
    <section className="mb-62.25 flex flex-col items-center px-x-grid *:text-center tablet:mb-58.75 desktop:mb-63.5">
      <p className="mb-6.25 font-jakarta text-s4-bold text-accent-orange-500 uppercase tablet:mb-7.5 tablet:text-s3-semibold-caps">
        Our best dentists
      </p>
      <h2 className="max-w-122 font-source-serif text-h6-semibold leading-tight text-text-primary max-mobile:text-[2rem] max-xs:text-[1.625rem] desktop:max-w-154 desktop:text-h5-semibold">
        {/* let the typo sink in (otherwise, the text wrapping comes out way too early for the mobile viewport) */}
        Dentist For Specialized And{" "}
        <strong className="text-primary-500">Experienced Dentistry</strong>
      </h2>
      <BestDentistsSectionCarousel />
    </section>
  );
};

export default BestDentistsSection;
