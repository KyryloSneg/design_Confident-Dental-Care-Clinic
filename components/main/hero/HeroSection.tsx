import HeroSectionBlurs from "./HeroSectionBlurs";
import HeroSectionContent from "./HeroSectionContent";
import HeroSectionIllustration from "./illustration/HeroSectionIllustration";

const HeroSection = () => {
  return (
    <div className="relative mb-17.75 flex flex-col items-center gap-x-8 gap-y-26.25 px-x-grid hero-section-large-col:mb-25 hero-section-large-col:gap-y-25 hero-section-row:flex-row hero-section-row:items-start hero-section-row:justify-between hero-section-row:pr-[calc(var(--spacing-x-grid)/2)] 2xl:justify-center min-[106.25em]:gap-50 min-[125em]:gap-80">
      <HeroSectionContent />
      <HeroSectionIllustration />
      <HeroSectionBlurs />
    </div>
  );
};

export default HeroSection;
