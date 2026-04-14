interface HoursRange {
  // (datetimes)
  // 08:00
  from: string;
  // 16:00
  to: string;
}

export interface FooterWorkingHoursItemProps {
  daysText: string;
  hoursRange: HoursRange;
}

function getUSTimeFromDateTime(dateTime: string): string {
  const minutesStr = dateTime.split(":")[1];
  const [hours, minutes] = dateTime.split(":").map(value => parseInt(value));

  const isAM = hours <= 12;
  const timeIndicatorString = isAM ? "AM" : "PM";

  const hoursUS = isAM ? hours : hours - 12;

  if (!minutes) return `${hoursUS}${timeIndicatorString}`;
  return `${hoursUS}:${minutesStr}${timeIndicatorString}`;
}

const FooterWorkingHoursItem = ({
  daysText,
  hoursRange,
}: FooterWorkingHoursItemProps) => {
  const fromUSTime = getUSTimeFromDateTime(hoursRange.from);
  const toUSTime = getUSTimeFromDateTime(hoursRange.to);

  return (
    <div className="flex items-center justify-between gap-4 border-b border-primary-400 pb-2 **:font-sans **:text-b2-light **:text-primary-400 tablet:max-desktop:**:text-[0.8125rem]">
      <dt>{daysText}</dt>
      <dd>
        <time dateTime={hoursRange.from}>{fromUSTime}</time> -{" "}
        <time dateTime={hoursRange.to}>{toUSTime}</time>
      </dd>
    </div>
  );
};

export default FooterWorkingHoursItem;
