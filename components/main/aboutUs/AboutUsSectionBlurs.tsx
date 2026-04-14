const AboutUsSectionBlurs = () => {
  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 -inset-y-160 right-0 hidden overflow-hidden xl:flex">
        <div className="absolute top-[47.5%] -right-[11.12%] aspect-square w-[36.15vw] -translate-y-1/2 rounded-full bg-secondary-500 opacity-14 blur-[14rem] 2xl:opacity-10" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 -inset-y-160 left-0 hidden overflow-hidden xl:flex">
        <div className="absolute top-[33.9%] -left-[9.87%] aspect-square w-[35.54vw] -translate-y-1/2 rounded-full bg-secondary-500 opacity-14 blur-[14rem] 2xl:opacity-10" />
      </div>
    </>
  );
};

export default AboutUsSectionBlurs;
