import Avatar from "@/components/ui/custom/avatar";

interface QuoteAuthor {
  imageSrc: string;
  name: string;
  role: string;
}

interface Quote {
  text: string;
  author: QuoteAuthor;
  rating: number;
}

export interface ClientReviewsSectionListItemProps {
  quote: Quote;
}

const ClientReviewsSectionListItem = ({
  quote,
}: ClientReviewsSectionListItemProps) => {
  return (
    <article className="relative h-max max-w-104 rounded-[0.75rem] bg-secondary-100 pt-14.75 pr-2.25 pb-10 pl-7.5 shadow-[0_0_1.625rem_0_#0e295105] tablet:max-w-69.25 tablet:pr-1.5 tablet:pb-5 tablet:pl-5 3md:max-w-76.5 3md:pr-8.25 3md:pl-5.5">
      <Avatar
        src={quote.author.imageSrc}
        width={66}
        height={59}
        quality={80}
        variant="secondary"
        size="lg"
        shape="rect"
        wrapperProps={{
          className: "absolute -top-9 left-5 3md:left-5.5 3md:-top-8",
        }}
      />
      <figure className="flex flex-col gap-5">
        <div
          role="img"
          aria-label={`${quote.rating} star${quote.rating > 1 ? "s" : ""} out of 5`}
          className="flex gap-1"
        >
          {Array.from({ length: 5 }).map((_, starIndex) => (
            <img
              key={starIndex}
              src={
                starIndex < quote.rating
                  ? "/icons/star_accent-orange-500.svg"
                  : "/icons/star_accent-orange-200.svg"
              }
              alt=""
              draggable="false"
              width={20}
              height={19}
            />
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <blockquote>
            <p className="font-sans text-b2-light text-pretty text-text-primary">
              {quote.text}
            </p>
          </blockquote>
          <figcaption>
            <h3 className="font-sans text-b2-medium-normal leading-[1.07] text-primary-500">
              {quote.author.name}
            </h3>
            <span className="font-sans text-b3-light text-text-muted">
              {quote.author.role}
            </span>
          </figcaption>
        </div>
      </figure>
    </article>
  );
};

export default ClientReviewsSectionListItem;
