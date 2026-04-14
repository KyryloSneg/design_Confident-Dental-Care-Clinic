const HeroSectionBlurs = () => {
  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 -inset-y-100 right-0 flex overflow-hidden">
        <div className="absolute top-[36.9%] -right-[13.5%] aspect-square w-[49.3vw] -translate-y-1/2 rounded-full bg-secondary-500 opacity-50 blur-[14rem] hero-section-large-col:top-[38.5%] hero-section-large-col:-right-[28.3%] hero-section-large-col:w-[50.4vw] sm:opacity-32 lg:opacity-16 hero-section-row:top-1/2 hero-section-row:-right-[7.9%] hero-section-row:w-[40.35vw] hero-section-row:opacity-30" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 -inset-y-100 left-0 flex overflow-hidden">
        <div className="absolute top-[48.5%] -left-[17.1%] aspect-square w-[41.9vw] -translate-y-1/2 rounded-full bg-secondary-500 opacity-40 blur-[14rem] hero-section-large-col:top-[45.1%] hero-section-large-col:-left-[14%] hero-section-large-col:w-[49.5vw] sm:opacity-24 lg:opacity-12 hero-section-row:top-[64.7%] hero-section-row:-left-[7.87%] hero-section-row:w-[35.54vw] hero-section-row:opacity-24" />
      </div>
    </>
  );
};

export default HeroSectionBlurs;
