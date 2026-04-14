"use client";

import InputGroup from "@/components/ui/custom/input-group";
import z from "zod";

const formSchema = z.object({
  email: z.email("Invalid email").or(z.literal("")),
});

const FooterSearchInputGroup = () => {
  return (
    <InputGroup
      formSchema={formSchema}
      className="max-w-74.25 tablet:max-w-72.25"
      srOnlyLabel="Email"
      placeholderProps={{
        cssTextContent: "'Your Email Here...'",
        className: "tablet:left-(--tablet-override-visible-ml)",
      }}
      inputProps={{
        type: "email",
        className: "h-11 tablet:p-(--tablet-override-visible-m)",
      }}
      buttonProps={{
        children: (
          <img
            src="/icons/chevron-right-rounded.svg"
            alt="Submit"
            className="text-[0.5rem] text-text-primary"
            draggable="false"
            width={19}
            height={19}
          />
        ),
        size: "icon-2lg",
        variant: "outline",
      }}
      style={
        {
          "--tablet-visible-ml": "1.9375rem",
          "--tablet-override-visible-ml": "1.875rem",
          "--tablet-visible-m":
            "0.375rem 0.375rem 0.375rem var(--tablet-visible-ml)",
          // idk why was this one poor pixel so important
          "--tablet-override-visible-m":
            "0.375rem 0.375rem 0.375rem var(--tablet-override-visible-ml)",
        } as React.CSSProperties
      }
    />
  );
};

export default FooterSearchInputGroup;
