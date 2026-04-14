import TreatmentsSectionList from "./TreatmentsSectionList";

const TreatmentsSection = () => {
  return (
    // limit the upper section's blurs with z-1
    <section
      className="relative z-1 mx-[calc(var(--spacing-x-grid)-var(--mobile-px))] mb-30 flex flex-col items-center gap-20 rounded-[1.5625rem] bg-bg-primary px-(--mobile-px) pt-20 pb-12.5 shadow-[0_0_0.25rem_0_#32558921] tablet:mx-[calc(var(--spacing-x-grid)-var(--tablet-px))] tablet:mb-28.75 tablet:gap-25 tablet:px-(--tablet-px) tablet:pt-25 tablet:pb-25 desktop:mx-[calc(var(--spacing-x-grid)-var(--desktop-px))] desktop:mb-30 desktop:gap-20 desktop:px-(--desktop-px)"
      style={
        {
          "--mobile-px": "0.75rem",
          "--tablet-px": "2rem",
          "--desktop-px": "3.75rem",
        } as React.CSSProperties
      }
    >
      <div className="flex w-full max-w-100 flex-col items-center gap-7.5 *:text-center desktop:max-w-118">
        <p className="font-jakarta text-s4-bold text-accent-orange-500 uppercase tablet:text-s3-bold">
          What we provide
        </p>
        <h2 className="text-h6-semibold font-source-serif text-text-primary capitalize desktop:text-h5-semibold">
          What <strong className="text-primary-500">the Treatments</strong> Do
          We Offer?
        </h2>
      </div>
      <TreatmentsSectionList />
    </section>
  );
};

export default TreatmentsSection;
