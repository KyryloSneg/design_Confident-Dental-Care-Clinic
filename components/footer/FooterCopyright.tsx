import { cn } from "@/utils/shadcn";

const FooterCopyright = ({ className = "" }: { className?: string }) => {
  return (
    <p
      className={cn(
        "font-sans text-[0.8125rem] font-light tracking-[0.02em] text-text-primary capitalize desktop:text-b2-light",
        className,
      )}
    >
      © 2024 CONFIDENT all rights reserved.
    </p>
  );
};

export default FooterCopyright;
