import ClientReviewsSectionIllustration from "./illustration/ClientReviewsSectionIllustration";
import ClientReviewsSectionList from "./list/ClientReviewsSectionList";

const ClientReviewsSection = () => {
  return (
    <section className="mb-30 flex flex-col items-center gap-25 bg-bg-primary px-x-grid py-20 tablet:mb-10.5 tablet:pt-25 tablet:pb-23.75 client-reviews-row:items-start client-reviews-row:gap-18 client-reviews-row:py-25 desktop:mb-30 2xl:items-center">
      <div className="flex w-full max-w-105.5 flex-col items-center gap-4.25 py-0.5 *:w-full *:text-center tablet:gap-7.5 tablet:py-3 client-reviews-row:max-w-154 client-reviews-row:items-start client-reviews-row:py-0 client-reviews-row:*:text-start 2xl:*:text-center">
        <p className="font-jakarta text-s4-bold text-accent-orange-500 uppercase tablet:text-s3-bold">
          Testimonial
        </p>
        <h2 className="font-source-serif text-[1.6875rem] leading-[1.245] font-semibold tracking-[0.02em] text-text-primary capitalize xs:text-[2rem] mobile:text-[2.3125rem] client-reviews-row:text-h5-semibold client-reviews-row:leading-[1.26]">
          Enhancing your smile &{" "}
          <strong className="text-primary-500">your confidence</strong>
        </h2>
      </div>
      <div className="flex w-full flex-col items-center gap-x-41 gap-y-25 tablet:gap-y-35.25 client-reviews-row:flex-row client-reviews-row:items-start client-reviews-row:justify-between 2xl:justify-center">
        <ClientReviewsSectionIllustration />
        <ClientReviewsSectionList />
      </div>
    </section>
  );
};

export default ClientReviewsSection;
