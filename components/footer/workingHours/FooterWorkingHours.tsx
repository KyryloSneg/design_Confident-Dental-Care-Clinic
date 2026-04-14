import FooterWorkingHoursItem, {
  type FooterWorkingHoursItemProps,
} from "./FooterWorkingHoursItem";

const itemsData: FooterWorkingHoursItemProps[] = [
  {
    daysText: "Mon - Fri",
    hoursRange: {
      from: "09:00",
      to: "20:00",
    },
  },
  {
    daysText: "Sat - Sun",
    hoursRange: {
      from: "09:00",
      to: "20:00",
    },
  },
];

const FooterWorkingHours = () => {
  return (
    <section className="flex flex-col gap-5 max-tablet:mb-11.75 max-tablet:pb-px desktop:gap-7.5">
      <h2 className="font-sans text-[0.9375rem] font-medium text-text-primary max-desktop:leading-[1.87] desktop:text-b1-medium">
        working hours
      </h2>
      <dl className="flex flex-col gap-5 tablet:gap-5.75 desktop:gap-5">
        {itemsData.map(item => (
          <FooterWorkingHoursItem key={item.daysText} {...item} />
        ))}
      </dl>
    </section>
  );
};

export default FooterWorkingHours;
