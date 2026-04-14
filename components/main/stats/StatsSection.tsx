import StatsSectionBlurs from "./StatsSectionBlurs";
import StatsSectionList from "./StatsSectionList";

const StatsSection = () => {
  return (
    <section
      className="relative mx-(--mobile-mx) mb-34.75 flex flex-col items-center rounded-[1.25rem] bg-bg-secondary px-(--mobile-px) py-12 shadow-[0_0_2.6875rem_0_#00000008] 2sm:py-20 sm:mb-33 sm:px-(--tablet-px) tablet:mx-(--tablet-mx) desktop:mx-(--desktop-mx) desktop:mb-30 desktop:px-(--desktop-px) desktop:py-21"
      aria-labelledby="stats-section-heading"
      style={
        {
          "--mobile-px": "0.875rem",
          "--tablet-px": "2rem",
          "--desktop-px": "3.75rem",
          "--mobile-mx": "1.25rem",
          "--tablet-mx": "calc(var(--spacing-x-grid) - var(--tablet-px))",
          "--desktop-mx": "calc(var(--spacing-x-grid) - var(--desktop-px))",
        } as React.CSSProperties
      }
    >
      <h2 id="stats-section-heading" className="sr-only">
        Our Impact and Global Reach
      </h2>
      <StatsSectionList />
      <StatsSectionBlurs />
    </section>
  );
};

export default StatsSection;
