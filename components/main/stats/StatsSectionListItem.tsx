export interface StatsSectionListItemProps {
  bgText: string;
  fgText: string;
}

const StatsSectionListItem = ({
  bgText,
  fgText,
}: StatsSectionListItemProps) => {
  return (
    <p className="relative w-max">
      <span className="inline-block h-full font-source-serif text-h1-semibold text-secondary-300 max-2sm:text-[5rem]">
        {bgText}
      </span>
      <span className="absolute top-1/2 left-1/2 z-1 mt-0.75 -translate-x-1/2 -translate-y-1/2 font-jakarta text-s3-semibold text-text-primary uppercase max-2sm:text-[0.875rem] 2sm:mt-1.5">
        {fgText}
      </span>
    </p>
  );
};

export default StatsSectionListItem;
