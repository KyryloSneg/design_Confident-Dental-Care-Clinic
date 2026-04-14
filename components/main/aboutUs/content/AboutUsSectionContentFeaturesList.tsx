import AboutUsSectionContentFeaturesListItem, {
  type AboutUsSectionContentFeaturesListItemProps,
} from "./AboutUsSectionContentFeaturesListItem";

const featuresData: AboutUsSectionContentFeaturesListItemProps[] = [
  {
    text: "Modern equipment",
  },
  {
    text: "Comfortable clinic",
  },
  {
    text: "Easy online appointment",
  },
  {
    text: "Always monitored",
  },
];

const AboutUsSectionContentFeaturesList = () => {
  return (
    <ul className="mb-12.5 grid w-full grid-cols-[auto] gap-x-8 gap-y-5 tablet:mb-15 tablet:grid-cols-[auto_auto] tablet:justify-between tablet:pr-[20.2%] lg:mb-11.5 lg:pr-[23.7%]">
      {featuresData.map(item => (
        <li key={item.text}>
          <AboutUsSectionContentFeaturesListItem {...item} />
        </li>
      ))}
    </ul>
  );
};

export default AboutUsSectionContentFeaturesList;
