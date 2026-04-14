import ClientReviewsSectionListItem, {
  type ClientReviewsSectionListItemProps,
} from "./ClientReviewsSectionListItem";

const itemsData: ClientReviewsSectionListItemProps[] = [
  {
    quote: {
      text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod",
      author: {
        imageSrc: "/avatar_testimonial_man-in-yellow.png",
        name: "Ryan Gigs",
        role: "Patient",
      },
      rating: 4,
    },
  },
  {
    quote: {
      text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod",
      author: {
        imageSrc: "/avatar_testimonial_man-in-brown.png",
        name: "Ryan Gigs",
        role: "Patient",
      },
      rating: 4,
    },
  },
  {
    quote: {
      text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod",
      author: {
        imageSrc: "/avatar_testimonial_man-in-red.png",
        name: "Ryan Gigs",
        role: "Patient",
      },
      rating: 4,
    },
  },
  {
    quote: {
      text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod",
      author: {
        imageSrc: "/avatar_testimonial_woman-in-light.png",
        name: "Ryan Gigs",
        role: "Patient",
      },
      rating: 4,
    },
  },
];

const ClientReviewsSectionList = () => {
  return (
    <ul className="grid grid-cols-1 gap-x-17.75 gap-y-15 tablet:grid-cols-2 tablet:gap-y-24.75 client-reviews-row:gap-x-7.5 client-reviews-row:gap-y-15.5">
      {itemsData.map(item => (
        <li
          key={`${item.quote.author.name}-${item.quote.author.imageSrc}`}
          className="relative flex items-end justify-center tablet:even:bottom-10"
        >
          <ClientReviewsSectionListItem {...item} />
        </li>
      ))}
    </ul>
  );
};

export default ClientReviewsSectionList;
