import StatsSectionListItem, {
  type StatsSectionListItemProps,
} from "./StatsSectionListItem";

const itemsData: (StatsSectionListItemProps & { desktopOrder?: number })[] = [
  {
    bgText: "74",
    fgText: "Clinics",
  },
  {
    bgText: "20",
    fgText: "Country",
  },
  {
    bgText: "40",
    fgText: "Partners",
    desktopOrder: 3,
  },
  {
    bgText: "19",
    fgText: "Years",
    desktopOrder: 2,
  },
];

function getIsOdd(index: number): boolean {
  return (index + 1) % 2 !== 0;
}

function getIsEven(index: number): boolean {
  return (index + 1) % 2 === 0;
}

function getIsLast(index: number): boolean {
  return index === itemsData.length - 1;
}

const StatsSectionList = () => {
  return (
    <ul className="sm:max-w-auto relative grid w-full grid-cols-[1fr_1fr] items-center gap-y-10 desktop:grid-cols-[2fr_3fr_3fr_2fr] desktop:px-[5%]">
      {itemsData.map((item, i) => (
        <li
          key={`${item.bgText}-${item.fgText}`}
          className="border-primary-100/30 max-desktop:nth-[-n+2]:border-b max-desktop:nth-[-n+2]:pb-10 max-sm:odd:pl-4 max-sm:even:pr-4 desktop:order-(--desktop-order) max-desktop:odd:[&>div]:border-r max-sm:even:[&>div]:justify-end sm:max-desktop:odd:[&>div]:pr-4 sm:max-desktop:even:[&>div]:pl-4 desktop:not-data-desktop-last:[&>div]:border-r desktop:first:[&>div]:justify-start desktop:data-desktop-odd:[&>div]:border-r desktop:data-desktop-last:[&>div]:justify-end"
          style={
            { "--desktop-order": item.desktopOrder || i } as React.CSSProperties
          }
          data-desktop-odd={getIsOdd(item.desktopOrder || i)}
          data-desktop-even={getIsEven(item.desktopOrder || i)}
          data-desktop-last={getIsLast(item.desktopOrder || i)}
        >
          <div className="flex border-primary-100/30 py-4 sm:justify-center">
            <StatsSectionListItem {...item} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default StatsSectionList;
