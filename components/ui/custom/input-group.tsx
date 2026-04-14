"use client";

import { Button, type ButtonProps } from "../shadcn/button";

import React, { useState } from "react";
import { cn } from "@/utils/shadcn";
import { z, type ZodObject } from "zod";
import {
  useForm,
  type SubmitHandler,
  type Path,
  type FieldValues,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type PlaceholderProps = React.ComponentProps<"span"> & {
  cssTextContent?: string;
};

type OnValid<Schema extends ZodObject<any, any>> = SubmitHandler<
  z.output<Schema>
>;

interface InputGroupProps<
  Schema extends ZodObject<any, any> = DefaultSchema,
> extends Omit<React.ComponentProps<"form">, "onSubmit"> {
  formSchema?: Schema;
  labelProps?: React.ComponentProps<"label">;
  inputProps?: React.ComponentProps<"input"> & {
    name?: never;
  };
  placeholderProps?: PlaceholderProps;
  buttonProps?: ButtonProps;
  srOnlyLabel?: string;
  // opt in to default responsive mode (override with custom breakpoints if needed).
  // if turned off, the component is always in the largest viewport visual state
  isResponsive?: boolean;
  onValid?: OnValid<Schema>;
}

const defaultButtonChildren = (
  <img
    src="/icons/search.svg"
    alt="Search"
    className="text-[0.5rem] text-text-primary"
    draggable="false"
    width={19}
    height={19}
  />
);

type DefaultSchema = typeof defaultFormSchema;

const defaultFormSchema = z.object({ search: z.string().optional() });
const defaultPlaceholderContent = "var(--header-search-placeholder-content)";

const InputGroup = <Schema extends ZodObject<any, any> = DefaultSchema>({
  formSchema,
  labelProps,
  inputProps,
  placeholderProps,
  buttonProps,
  onValid,
  srOnlyLabel = "Search",
  isResponsive = false,
  ...props
}: InputGroupProps<Schema>) => {
  type FormData = z.infer<Schema>;
  const formSchemaToUse = (formSchema || defaultFormSchema) as Schema;

  const {
    formState: { errors },
    handleSubmit,
    register,
    setFocus,
    reset,
  } = useForm<FormData>({
    // @ts-ignore - couldn't managed to fix this. i lost
    resolver: zodResolver(formSchemaToUse),
    shouldUseNativeValidation: false,
  });

  const placeholderPropsToUse: PlaceholderProps = {
    cssTextContent: defaultPlaceholderContent,
    ...placeholderProps,
  };

  let placeholderPropsWithoutCSSContent: PlaceholderProps = {
    ...placeholderPropsToUse,
  };

  delete placeholderPropsWithoutCSSContent.cssTextContent;

  const buttonPropsToUse: ButtonProps = {
    children: defaultButtonChildren,
    ...buttonProps,
  };

  const [isActive, setIsActive] = useState(false);

  const inputName = formSchemaToUse.keyof().options[0] as Path<FormData>;
  const isError = !!errors[inputName];

  const { onChange: rhfOnChange, ...rhfInputProps } = register(inputName);

  function cleanupForm() {
    reset();
    setFocus(inputName);
    setIsActive(false);
  }

  const onValidToUse: SubmitHandler<FormData> = (data, e) => {
    e?.preventDefault(); // just in case
    onValid?.(data, e);

    cleanupForm();
  };

  const onChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setIsActive(!!e.target.value);

    rhfOnChange(e);
    inputProps?.onChange?.(e);
  };

  return (
    <form
      {...props}
      onSubmit={handleSubmit(onValidToUse as SubmitHandler<FieldValues>)}
      className={cn("relative w-full", props.className)}
      style={
        {
          "--mobile-visible-ml": "1rem",
          "--tablet-visible-ml": "1.125rem",
          "--mobile-visible-m":
            "0.3125rem 0.3125rem 0.3125rem var(--mobile-visible-ml)",
          "--tablet-visible-m":
            "0.375rem 0.375rem 0.3125rem var(--tablet-visible-ml)",
          "--mobile-button-h": "1.5rem",
          "--tablet-button-h": "2rem",
          "--mobile-button-additional-w": "0.1875rem",
          "--mobile-button-w":
            "calc(var(--mobile-button-h) + var(--mobile-button-additional-w))",
          "--tablet-button-w":
            "calc(var(--tablet-button-h) + var(--mobile-button-additional-w))",
          "--gap": "0.625rem",
          "--input-mobile-pr": "calc(var(--mobile-button-w) + var(--gap))",
          "--input-tablet-pr": "calc(var(--tablet-button-w) + var(--gap))",
          "--input-group-placeholder-content":
            placeholderPropsToUse.cssTextContent,
          "--mobile-button-translate-y": "-43%",
          "--tablet-button-translate-y": "-50%",
          "--placeholder-additional-ml": "0.0625rem",
          ...props.style,
        } as React.CSSProperties
      }
    >
      <label
        {...labelProps}
        className={cn(
          "relative block w-full font-sans **:text-b2-light",
          labelProps?.className,
        )}
      >
        <span className="sr-only">{srOnlyLabel}</span>
        <input
          type="search"
          placeholder=""
          autoComplete="off"
          aria-invalid={isError}
          data-active={isActive}
          data-invalid={isError}
          {...inputProps}
          {...rhfInputProps}
          className={cn(
            "peer h-8.5 w-full rounded-full border border-transparent bg-secondary-100 pl-3.75 font-sans text-b2-light text-text-primary inset-shadow-[0_0_0_1000px_var(--color-bg-secondary)] transition-colors outline-none focus-visible:border focus-visible:border-primary-500 data-[invalid=true]:border-accent-orange-200 data-[invalid=true]:text-accent-orange-500 data-[invalid=true]:focus-visible:border-accent-orange-500",
            isResponsive
              ? "p-(--mobile-visible-m) pr-(--input-mobile-pr)! tablet:h-10.75 tablet:p-(--tablet-visible-m) tablet:pr-(--input-tablet-pr)!"
              : "h-10.75 p-(--tablet-visible-m) pr-(--input-tablet-pr)!",
            inputProps?.className,
          )}
          onChange={onChange}
        />
        <span
          data-invalid={isError}
          {...placeholderPropsWithoutCSSContent}
          className={cn(
            "pointer-events-none absolute inset-y-0 ml-(--placeholder-additional-ml) flex font-sans text-b2-light text-primary-200 transition-colors peer-autofill:opacity-0 peer-focus:text-primary-500 peer-data-active:opacity-0 peer-[-webkit-autofill]:opacity-0 before:absolute before:top-1/2 before:w-max before:[content:var(--input-group-placeholder-content)]! data-[invalid=true]:text-accent-orange-500",
            isResponsive
              ? "left-(--mobile-visible-ml) before:translate-y-(--mobile-button-translate-y) tablet:left-(--tablet-visible-ml) tablet:before:translate-y-(--tablet-button-translate-y)"
              : "left-(--tablet-visible-ml) before:translate-y-(--tablet-button-translate-y)",
            placeholderPropsToUse?.className,
          )}
        ></span>
      </label>
      <Button
        type="submit"
        disabled={isError}
        {...buttonPropsToUse}
        className={cn(
          "px-0.375 absolute left-auto!",
          isResponsive
            ? "inset-(--mobile-visible-m) h-(--mobile-button-h) w-(--mobile-button-w) tablet:inset-(--tablet-visible-m) tablet:h-(--tablet-button-h) tablet:w-(--tablet-button-w)"
            : "inset-(--tablet-visible-m) h-(--tablet-button-h) w-(--tablet-button-w)",
          buttonPropsToUse?.className,
        )}
      />
    </form>
  );
};

export default InputGroup;
