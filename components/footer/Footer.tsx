import { Separator } from "../ui/shadcn/separator";
import FooterCopyright from "./FooterCopyright";
import FooterMedia from "./FooterMedia";
import FooterSearch from "./search/FooterSearch";
import FooterNavigation from "./navigation/FooterNavigation";
import FooterWorkingHours from "./workingHours/FooterWorkingHours";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-bg-primary px-x-grid py-15 tablet:py-15.25 desktop:pt-15 desktop:pb-7.5">
      <div className="grid grid-cols-1 gap-x-4 max-tablet:mb-7.5 tablet:grid-cols-[1fr_auto] tablet:items-end tablet:justify-between">
        <FooterSearch />
        <Separator className="my-7.5 tablet:hidden" />
        <FooterMedia />
      </div>
      <Separator className="mt-7.75 mb-7.5 hidden tablet:block" />
      <div className="grid grid-cols-1 tablet:grid-cols-[1fr_auto_1.922fr] tablet:items-center desktop:grid-cols-[1fr_auto_2.164fr]">
        <div className="flex flex-col tablet:gap-7.5 desktop:gap-12.5">
          <FooterWorkingHours />
          <FooterCopyright className="hidden tablet:block" />
        </div>
        <Separator
          orientation="vertical"
          className="mx-7.5 min-h-58.5 max-tablet:hidden desktop:h-63"
        />
        <FooterNavigation />
      </div>
      <Separator className="mt-7.5 mb-5 tablet:hidden" />
      <FooterCopyright className="tablet:hidden" />
    </footer>
  );
};

export default Footer;
