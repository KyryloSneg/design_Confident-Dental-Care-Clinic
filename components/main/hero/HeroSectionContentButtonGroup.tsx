import PlayIcon from "@/components/ui/custom/icons/PlayIcon";
import { Button } from "@/components/ui/shadcn/button";

const HeroSectionContentButtonGroup = () => {
  return (
    <div className="grid grid-cols-[auto] items-center justify-center gap-x-4 gap-y-6 mobile:grid-cols-[auto_auto] mobile:justify-between hero-section-large-col:gap-x-17.5 hero-section-row:gap-x-10 min-[32.5rem]:justify-start">
      <Button>Contact Us</Button>
      <Button
        variant="secondary"
        size="sm"
        className="[&_path]:fill-accent-orange-500 [&_rect]:stroke-accent-orange-500 [&_rect]:transition-colors hover:[&_rect]:stroke-primary-500"
      >
        <PlayIcon />
        Watch video profile
      </Button>
    </div>
  );
};

export default HeroSectionContentButtonGroup;
