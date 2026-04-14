import PartnerLink, { type PartnerLinkProps } from "./PartnerLink";

type HiddenAt = "mobile" | "tablet" | false;
type PartnerLinkPropsWithHiddenAt = PartnerLinkProps & { hiddenAt?: HiddenAt };

const hiddenAtVariation: Record<Exclude<HiddenAt, false> | "false", string> = {
  mobile: "hidden tablet:block",
  tablet: "hidden desktop:block",
  false: "block",
};

const partnerLinksData: PartnerLinkPropsWithHiddenAt[] = [
  {
    href: "#",
    src: "/partner-1.png",
    alt: "Partner 1",
    width: 200,
    height: 54,
    hiddenAt: "tablet",
  },
  {
    href: "#",
    src: "/partner-2.png",
    alt: "Partner 2",
    width: 208,
    height: 54,
    hiddenAt: "mobile",
  },
  {
    href: "#",
    src: "/partner-3.png",
    alt: "Partner 3",
    width: 200,
    height: 54,
  },
  {
    href: "#",
    src: "/partner-4.png",
    alt: "Partner 4",
    width: 208,
    height: 54,
  },
  {
    href: "#",
    src: "/partner-5.png",
    alt: "Partner 5",
    width: 216,
    height: 54,
    hiddenAt: "tablet",
  },
];

const maxHeightOfPartners = partnerLinksData.reduce(
  (acc, curr) => (curr.height > acc ? curr.height : acc),
  0,
);

const colPartners = partnerLinksData.filter(item => !item.hiddenAt);
const heightOfColPartners = colPartners.reduce(
  (acc, curr) => acc + curr.height,
  0,
);

const PartnersSection = () => {
  return (
    // set z-index: 1 in order to limit the blurs from the hero section
    <section className="mb-42.75 flex flex-col items-center gap-12.5 px-[2.29%] pt-30 tablet:mb-45 tablet:px-[2.5%] desktop:gap-15 desktop:px-x-grid! @tablet:px-[3.44%]">
      <h2 className="text-center font-jakarta text-s3-bold text-accent-orange-500 uppercase">
        Our clinic partners
      </h2>
      <ul
        className="flex min-h-(--col-min-h) w-full flex-col items-center justify-center gap-x-12.5 gap-y-(--gap-y) lg:max-xl:gap-30 xl:max-desktop:gap-36 desktop:justify-between @mobile:min-h-(--row-min-h) @mobile:flex-row"
        style={
          {
            "--row-min-h": `${maxHeightOfPartners}px`,
            "--col-min-h": `calc(${heightOfColPartners}px + var(--gap-y) * ${colPartners.length - 1})`,
            "--gap-y": "2rem",
          } as React.CSSProperties
        }
      >
        {partnerLinksData.map(item => (
          <li
            key={item.src}
            className={hiddenAtVariation[`${item.hiddenAt || false}`]}
          >
            <PartnerLink {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PartnersSection;
