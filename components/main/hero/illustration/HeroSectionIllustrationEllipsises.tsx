import { cn } from "@/utils/shadcn";
import Image from "next/image";

const firstLayerClassNameWithoutBg =
  "absolute inset-x-[11.88%] top-[12.89%] bottom-[12.42%] rounded-full";

const HeroSectionIllustrationEllipsises = () => {
  return (
    <>
      <div className="absolute inset-0 rounded-full border border-dashed border-text-accordion-content opacity-24 hero-section-large-col:border-2" />
      <div className="absolute inset-x-[6.64%] inset-y-[5.82%] rounded-full border border-dashed border-text-accordion-content opacity-24" />
      <div
        className={cn(
          firstLayerClassNameWithoutBg,
          "bg-illustration-card-layer-1",
        )}
      />
      <div
        className={cn(
          firstLayerClassNameWithoutBg,
          "z-1 [clip-path:var(--mobile-clip-path)] hero-section-large-col:[clip-path:var(--tablet-clip-path)] hero-section-row:[clip-path:var(--desktop-clip-path)]",
        )}
        style={
          {
            "--mobile-clip-path": "inset(-100% 0% 0% round 0% 0% 49.4% 49.6%)",
            "--tablet-clip-path": "inset(-100% 0% 0% round 0% 0% 50% 49.8%)",
            "--desktop-clip-path": "inset(-100% 0% 0% round 0% 0% 48.9% 48%)",
          } as React.CSSProperties
        }
      >
        <Image
          src="/hero-section-doctor.png"
          alt=""
          width={427}
          height={551}
          quality={90}
          sizes="(max-width: 600px) 274px, (max-width: 1370px) 412px, 427px"
          loading="eager"
          className="absolute right-[3.44%] bottom-0 aspect-427/551 h-auto w-[86.44%]"
        />
      </div>
      <div className="absolute inset-x-[17.59%] top-[18.55%] bottom-[17.92%] rounded-full bg-illustration-card-layer-2 opacity-6" />
      <div className="absolute top-[24.37%] right-[22.84%] bottom-[19.81%] left-[22.53%] rounded-full bg-illustration-card-layer-3 opacity-11" />
    </>
  );
};

export default HeroSectionIllustrationEllipsises;
