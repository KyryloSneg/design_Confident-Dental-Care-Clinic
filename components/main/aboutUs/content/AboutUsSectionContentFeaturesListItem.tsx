import Badge from "@/components/ui/custom/badge";
import CheckmarkIcon from "@/components/ui/custom/icons/CheckmarkIcon";

export interface AboutUsSectionContentFeaturesListItemProps {
  text: string;
}

const AboutUsSectionContentFeaturesListItem = ({
  text,
}: AboutUsSectionContentFeaturesListItemProps) => {
  return (
    <div className="flex items-center gap-3">
      <Badge size="3xs">
        <CheckmarkIcon />
      </Badge>
      <p className="font-sans text-b2-medium-normal text-text-primary capitalize">
        {text}
      </p>
    </div>
  );
};

export default AboutUsSectionContentFeaturesListItem;
