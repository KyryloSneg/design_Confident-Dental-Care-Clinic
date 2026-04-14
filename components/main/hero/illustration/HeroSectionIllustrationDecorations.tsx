import Avatar from "@/components/ui/custom/avatar";
import Badge from "@/components/ui/custom/badge";
import CheckmarkIcon from "@/components/ui/custom/icons/CheckmarkIcon";

const HeroSectionIllustrationDecorations = () => {
  return (
    <>
      <Badge
        src="/icons/shield.svg"
        border="primary"
        size="2sm"
        responsiveMode="heroSection"
        outline={true}
        wrapperProps={{
          className:
            "absolute top-[11.70%] left-[9.15%] z-1 hero-section-floating-badge-shadow hero-section-large-col:top-[11.65%] hero-section-large-col:left-[9.00%]",
        }}
      />
      <Badge
        src="/icons/tooth.svg"
        variant="accentOrange"
        border="primary"
        size="3sm"
        responsiveMode="heroSection"
        outline={true}
        wrapperProps={{
          className:
            "absolute right-[2.65%] z-1 hero-section-floating-badge-shadow hero-section-large-col:right-[2.72%] bottom-[20.00%] hero-section-row:right-[2.78%]",
        }}
      />
      <section className="absolute bottom-[44.30%] left-[4.57%] z-1 flex rounded-[0.5rem] bg-[#FCFCFC] pt-1 pr-1.75 pb-1.5 pl-5.5 shadow-[0_0.25rem_0.6875rem_0_#0000001c] inset-shadow-[-1px_-1px_1px_0_var(--color-secondary-100)] hero-section-large-col:bottom-[44.23%] hero-section-large-col:left-[4.48%] hero-section-large-col:pt-3.25 hero-section-large-col:pr-2.75 hero-section-large-col:pb-2.75 hero-section-large-col:pl-8.75 hero-section-row:bottom-[44.65%] hero-section-row:pr-4.5 hero-section-row:pl-8.5">
        <Badge
          src="/icons/person.svg"
          variant="accentOrange"
          shape="rect"
          size="xs"
          responsiveMode="heroSection"
          wrapperProps={{
            className:
              "absolute opacity-96 -left-2 top-2.5 hero-section-large-col:top-1/2 hero-section-large-col:-translate-y-1/2 shadow-[0_0.25rem_0.5rem_0_#00000012] hero-section-large-col:-left-3",
          }}
        />
        <div className="flex flex-col gap-0.5 bg-secondary-100 hero-section-large-col:gap-1">
          <h3 className="font-sans text-[0.75rem] leading-tight font-medium text-text-primary capitalize hero-section-large-col:text-[0.9375rem] hero-section-large-col:leading-[1.27]">
            Dr. Aubrey Clark
          </h3>
          <p className="font-sans text-[0.625rem] leading-[1.1] font-light text-text-primary/50 hero-section-large-col:text-[0.75rem] hero-section-large-col:leading-[0.92]">
            Dentist
          </p>
        </div>
      </section>
      <section className="absolute bottom-[17.66%] left-[9.86%] z-1 flex items-center gap-2 rounded-[0.625rem] bg-[#FCFCFC] py-1.75 pr-1.5 pl-1.5 shadow-[0.125rem_0.625rem_0.8125rem_0_#90929526] inset-shadow-[-1px_-1px_1px_0_var(--color-secondary-100)] hero-section-large-col:bottom-[19.03%] hero-section-large-col:left-[9.76%] hero-section-large-col:gap-3.5 hero-section-large-col:py-2.5 hero-section-large-col:pr-5.5 hero-section-large-col:pl-2.25 hero-section-row:left-[9.72%] hero-section-row:pr-7.25 hero-section-row:pl-2.5">
        <Badge
          src="/icons/award.svg"
          variant="accentLighterYellow"
          size="sm"
          responsiveMode="heroSection"
        />
        <div className="flex flex-col gap-0.5 pt-px hero-section-large-col:gap-0">
          <h3 className="font-sans text-[0.625rem] leading-[1.3] font-medium text-text-primary capitalize hero-section-large-col:text-[0.8125rem] hero-section-large-col:leading-[1.75]">
            We are the best dental clinic
          </h3>
          <p className="font-sans text-[0.625rem] leading-[1.1] font-light text-text-secondary hero-section-large-col:text-[0.75rem] hero-section-large-col:leading-[0.92]">
            Lorem ipsum dolor sit.
          </p>
        </div>
      </section>
      <div className="absolute top-[31.50%] right-[5.05%] z-1 hidden gap-0.5 min-[27.5em]:flex hero-section-large-col:top-[33.20%] hero-section-large-col:right-[5.20%] hero-section-large-col:gap-0.75 hero-section-row:top-[31.60%] hero-section-row:right-[4.60%]">
        {/* make pt for tablets and desktops a px larger in order to make it look more similar to the original design */}
        <p className="mt-11.25 h-max rounded-[0.375rem] bg-secondary-100 py-1.75 pr-1 pl-1.25 font-sans text-[0.5625rem] leading-[0.8] font-medium text-text-primary capitalize shadow-[0_0_1.25rem_1px_#153a731c] hero-section-large-col:mt-16.75 hero-section-large-col:pt-2.25 hero-section-large-col:pr-2.5 hero-section-large-col:pb-2.5 hero-section-large-col:pl-2 hero-section-large-col:text-[0.75rem] hero-section-large-col:leading-[0.92] hero-section-row:pr-2.75 hero-section-row:pl-3">
          Very good experience...
        </p>
        <div className="relative h-max">
          <Avatar
            src="/avatar_man-in-blue.png"
            quality={80}
            responsiveMode="heroSection"
          />
          <Badge
            variant="accentLighterYellow"
            size="2xs"
            responsiveMode="heroSection"
            wrapperProps={{
              className:
                "absolute bottom-0 left-0.5 hero-section-large-col:left-0.75",
            }}
          >
            <CheckmarkIcon />
          </Badge>
        </div>
      </div>
    </>
  );
};

export default HeroSectionIllustrationDecorations;
