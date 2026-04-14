import { UILink } from "@/components/ui/custom/link";
import AboutUsSectionContentFeaturesList from "./AboutUsSectionContentFeaturesList";

const AboutUsSectionContent = () => {
  return (
    <section className="z-1 flex max-w-120.25 flex-col tablet:max-w-156.25 lg:max-w-152">
      <p className="mb-6.25 font-jakarta text-s4-bold text-accent-orange-500 uppercase tablet:mb-7.5 tablet:text-s3-bold">
        About Us
      </p>
      <h2 className="mb-5 font-source-serif text-[2rem] leading-tight font-semibold tracking-[0.02em] text-balance text-text-primary capitalize 2sm:text-[2.3125rem] lg:text-h5-semibold lg:leading-[1.26]">
        Your <strong className="text-primary-500">trusted partner</strong> for
        dental Health
      </h2>
      <p className="mb-10 font-sans text-[0.9375rem] leading-[1.54] font-light text-pretty text-text-primary tablet:text-b1-light tablet:leading-[1.56] lg:leading-[1.58]">
        Our team is dedicated to providing the best possible dental care for
        you. A healthy smile is a happy smile – we help you achieve both!
      </p>
      <AboutUsSectionContentFeaturesList />
      <UILink href="#" isWithRightChevron={true}>
        Read more
      </UILink>
    </section>
  );
};

export default AboutUsSectionContent;
