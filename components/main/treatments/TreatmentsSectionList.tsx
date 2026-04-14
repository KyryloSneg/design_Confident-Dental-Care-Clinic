import { OptionalField } from "@/utils/ts-util-types";
import TreatmentsSectionListItem, {
  type TreatmentsSectionListItemProps,
} from "./TreatmentsSectionListItem";

const itemsData: OptionalField<TreatmentsSectionListItemProps, "index">[] = [
  {
    badgeProps: {
      src: "/icons/removing-tooth.svg",
      bgClassName: "bg-secondary-200",
    },
    headingText: "Lawn fertilization",
    paragraphText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    href: "#",
  },
  {
    badgeProps: {
      src: "/icons/bracket.svg",
      width: 62,
      height: 62,
      bgClassName: "bg-accent-orange-100",
    },
    headingText: "Dental bridge",
    paragraphText: "Lorem ipsum dolor sit amet, consectetur.",
    href: "#",
  },
  {
    badgeProps: {
      src: "/icons/tooth-pain.svg",
      width: 53,
      height: 54,
      bgClassName: "bg-primary-100/40",
    },
    headingText: "General dentistry",
    paragraphText: "Lorem ipsum dolor sit amet, consectetur.",
    href: "#",
  },
  {
    badgeProps: {
      src: "/icons/tooth-fixing.svg",
      width: 55,
      height: 55,
      bgClassName: "bg-accent-yellow-100",
    },
    headingText: "Cavity inspection",
    paragraphText: "Lorem ipsum dolor sit amet, consectetur.",
    href: "#",
  },
  {
    badgeProps: {
      src: "/icons/help.svg",
      width: 58,
      height: 58,
      bgClassName: "bg-accent-orange-600/26",
    },
    headingText: "Live advisory",
    paragraphText: "Lorem ipsum dolor sit amet, consectetur.",
    href: "#",
  },
];

const TreatmentsSectionList = () => {
  return (
    <ul className="grid w-full grid-cols-4 gap-10 tablet:grid-cols-8 tablet:gap-x-13.25 desktop:grid-cols-12 desktop:gap-x-10">
      {itemsData.map((item, i) => (
        <li
          key={`${item.headingText}-${item.href}`}
          className="col-[span_4] tablet:nth-1:col-[span_8] desktop:col-[span_4] desktop:nth-1:col-[span_6] desktop:nth-2:col-[span_6]"
        >
          <TreatmentsSectionListItem index={i} {...item} />
        </li>
      ))}
    </ul>
  );
};

export default TreatmentsSectionList;
