import Avatar from "@/components/ui/custom/avatar";
import Badge from "@/components/ui/custom/badge";
import { cn } from "@/utils/shadcn";

const patientAvatars = [
  "/avatar_woman-in-blue.png",
  "/avatar_man-in-blue-thumbs-up.png",
  "/avatar_man-in-yellow-tall.png",
];

const basePatientClassName =
  "relative h-max shadow-[0_0_0.25rem_0_#00000012] right-[calc(var(--mobile-right)*var(--index))] tablet:right-[calc(var(--tablet-right)*var(--index))]";

const AboutUsSectionIllustrationDecorations = () => {
  return (
    <>
      <section className="absolute top-[39.02%] -left-(--about-us-illustration-pl) z-2 flex rounded-[0.3125rem] bg-bg-secondary pt-1 pr-1.75 pb-1.75 shadow-[0_0.25rem_0.6875rem_0_#0000001c] inset-shadow-[-1px_-1px_1px_0_var(--color-secondary-100)] tablet:items-center tablet:pt-2.25 tablet:pr-3.5 tablet:pb-2.25">
        <Badge
          src="/icons/person.svg"
          variant="accentOrange"
          shape="rect"
          size="4sm"
          responsiveMode="aboutUsSection"
          wrapperProps={{
            className:
              "relative opacity-96 top-0.75 tablet:top-auto right-(--about-us-illustration-badge-right) shadow-[0_0.25rem_0.6875rem_0_#00000036]",
          }}
        />
        <div className="flex flex-col">
          <h3 className="font-sans text-[0.75rem] leading-[1.58] font-medium text-text-primary capitalize">
            Dr. Aubrey Clark
          </h3>
          <p className="font-sans text-[0.5625rem] leading-[1.22] font-light text-text-primary">
            Dentist
          </p>
        </div>
      </section>
      <div
        className="absolute -right-(--about-us-illustration-pr) bottom-[9.21%] z-2 flex flex-col gap-0.75 rounded-[0.625rem] bg-bg-secondary pt-2.5 pr-2.75 pb-0.75 pl-1.25 shadow-[0_0.25rem_0.6875rem_0_#0000001c] transform-3d tablet:gap-1 tablet:py-3 tablet:pr-4.75 tablet:pl-3"
        style={
          {
            "--mobile-right": "0.5625rem",
            "--tablet-right": "0.6875rem",
          } as React.CSSProperties
        }
      >
        <ul className="relative flex w-0 items-center pl-1.75 transform-3d tablet:pl-1.25">
          {patientAvatars.map((src, i) => (
            <li key={src} style={{ "--index": i } as React.CSSProperties}>
              <Avatar
                src={src}
                variant="tersier"
                size="xs"
                width={28}
                height={28}
                sizes="(max-width: 769px) 24px, 28px"
                responsiveMode="aboutUsSection"
                quality={80}
                wrapperProps={{ className: basePatientClassName }}
              />
            </li>
          ))}
          <li className="self-start">
            <div
              className={cn(
                "flex aspect-square size-7 items-center justify-center rounded-full bg-accent-orange-500 font-sans text-[1.1875rem] leading-[1.47] text-bg-secondary tablet:size-8",
                basePatientClassName,
              )}
              style={
                { "--index": patientAvatars.length } as React.CSSProperties
              }
            >
              +
            </div>
          </li>
        </ul>
        <p className="relative flex flex-col font-sans text-[0.75rem] leading-none text-text-primary capitalize">
          Trusted by{" "}
          <strong className="text-[1rem] leading-[1.75] font-medium text-accent-orange-500">
            200+ patients
          </strong>
        </p>
        <div className="absolute -inset-2.5 -translate-z-px rounded-[0.75rem] bg-[#fde5d9] opacity-54 shadow-[0_0.25rem_0.6875rem_0_#00000036]" />
      </div>
    </>
  );
};

export default AboutUsSectionIllustrationDecorations;
