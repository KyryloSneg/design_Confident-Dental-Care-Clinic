import FirstVisitDiscountSectionContent from "./content/FirstVisitDiscountSectionContent";
import FirstVisitDiscountSectionIllustration from "./illustration/FirstVisitDiscountSectionIllustration";

const FirstVisitDiscountSection = () => {
  return (
    <div
      className="relative mx-(--mobile-mx) mb-30 flex flex-col items-center gap-y-26.75 rounded-(--rounded) bg-secondary-200 px-(--mobile-px) shadow-[0_0_1.625rem_0_#0e29510f] tablet:mx-(--tablet-mx) tablet:flex-row tablet:items-start tablet:justify-start tablet:px-(--tablet-px) xl:px-(--desktop-px) desktop:mx-(--desktop-mx)"
      style={
        {
          "--rounded": "1.5625rem",
          "--mobile-px": "0.75rem",
          "--tablet-px": "2rem",
          "--desktop-px": "3.75rem",
          "--2md-additional-px": "4rem",
          "--lg-additional-px": "8rem",
          "--2xl-additional-px": "5rem",
          "--3xl-additional-px": "8rem",
          "--4xl-additional-px": "15rem",
          "--mobile-mx": "calc(var(--spacing-x-grid) - var(--mobile-px))",
          "--tablet-mx": "calc(var(--spacing-x-grid) - var(--tablet-px))",
          "--desktop-mx": "calc(var(--spacing-x-grid) - var(--desktop-px))",
        } as React.CSSProperties
      }
    >
      <FirstVisitDiscountSectionContent />
      <FirstVisitDiscountSectionIllustration />
    </div>
  );
};

export default FirstVisitDiscountSection;
