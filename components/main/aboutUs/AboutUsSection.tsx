import AboutUsSectionBlurs from "./AboutUsSectionBlurs";
import AboutUsSectionContent from "./content/AboutUsSectionContent";
import AboutUsSectionIllustration from "./illustration/AboutUsSectionIllustration";

const AboutUsSection = () => {
  return (
    <div className="relative mb-30 flex flex-col items-center gap-x-39.25 gap-y-22 px-x-grid xs:gap-y-31.5 tablet:gap-y-32.5 xl:flex-row xl:items-start xl:justify-between 2xl:justify-center">
      <AboutUsSectionIllustration />
      <AboutUsSectionContent />
      <AboutUsSectionBlurs />
    </div>
  );
};

export default AboutUsSection;
