import HeroSectionIllustrationDecorations from "./HeroSectionIllustrationDecorations";
import HeroSectionIllustrationEllipsises from "./HeroSectionIllustrationEllipsises";

const HeroSectionIllustration = () => {
  return (
    <div
      className="pointer-events-none relative aspect-104/104.75 w-full max-w-104 select-none hero-section-large-col:aspect-156.25/159 hero-section-large-col:max-w-156.25 hero-section-row:top-3 hero-section-row:aspect-162/159 hero-section-row:max-w-162"
      aria-hidden="true"
    >
      <HeroSectionIllustrationEllipsises />
      <HeroSectionIllustrationDecorations />
    </div>
  );
};

export default HeroSectionIllustration;
