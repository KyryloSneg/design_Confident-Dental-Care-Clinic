import { cn } from "@/utils/shadcn";

const wrapperBaseClassName =
  "pointer-events-none absolute -inset-x-(--mobile-mx) -inset-y-120 -z-1 overflow-hidden sm:-inset-x-(--tablet-mx) desktop:-inset-x-(--desktop-mx)";

const StatsSectionBlurs = () => {
  return (
    <>
      <div className={wrapperBaseClassName}>
        <div className="absolute top-[44.7%] -left-[31.3%] aspect-square w-[78.125vw] max-w-85.75 -translate-y-1/2 rounded-full bg-secondary-500 opacity-14 blur-[17rem] 2sm:max-w-93.75 sm:top-[45.8%] sm:-left-[17.7%] desktop:top-[58.4%] desktop:-left-[12.2%] desktop:w-[35.9vw] desktop:max-w-129.25" />
      </div>
      <div className={wrapperBaseClassName}>
        <div className="absolute top-[42%] -right-[28%] aspect-square w-[65.625vw] max-w-70.75 -translate-y-1/2 rounded-full bg-secondary-500 opacity-14 blur-[17rem] 2sm:max-w-78.75 sm:top-[42.5%] sm:-right-[4.3%] desktop:top-[51.6%] desktop:-right-[7.6%] desktop:w-[36.53vw] desktop:max-w-131.5" />
      </div>
      <div className={cn(wrapperBaseClassName, "desktop:hidden")}>
        <div className="absolute top-[62%] -right-[10.9%] aspect-square w-[65.625vw] max-w-70.75 -translate-y-1/2 rounded-full bg-secondary-500 opacity-14 blur-[17rem] 2sm:max-w-78.75 sm:top-[65.4%] sm:-right-[3.8%]" />
      </div>
    </>
  );
};

export default StatsSectionBlurs;
