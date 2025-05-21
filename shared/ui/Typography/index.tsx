import { FC } from "react";
import { tv } from "tailwind-variants";
import {
  TypographyComponent,
  TypographyComponentPossibleNames,
  TypographyType,
  TypographyVarinat,
} from "./types";

export const typography = tv({
  base: "text-text-500 leading-base",
  slots: {
    heading1: "font-charis-sil text-[48px]",
    heading2: "font-charis-sil text-[36px]",
    heading3: "font-charis-sil text-[28px]",
    heading4: "font-charis-sil text-[21px]",
    body: "font-inter text-[15px]",
    smal: "font-inter text-[12px]",
    micro: "font-inter text-[9px]",
  },
  variants: {
    weight: {
      normal: "font-normal",
      bold: "font-bold",
    },
    italic: {
      italic: "italic",
      normal: "not-italic",
    },
    underline: {
      not: "no-underline",
      solid: "underline decoration-solid",
      doted: "underline decoration-dotted",
    },
  },
  defaultVariants: {
    weight: "normal",
    style: "normal",
  },
});

export const typographyVariants: TypographyVarinat[] = [
  { name: "Heading1", tag: "h1", variant: "heading1" },
  { name: "Heading2", tag: "h2", variant: "heading2" },
  { name: "Heading3", tag: "h3", variant: "heading3" },
  { name: "Heading4", tag: "h4", variant: "heading4" },
  { name: "Body", tag: "p", variant: "body" },
  { name: "Smal", tag: "p", variant: "smal" },
  { name: "Micro", tag: "span", variant: "micro" },
];

const TypographyBase: FC<TypographyType> = ({
  className,
  children,
  weight,
  italic,
  underline,
  ...props
}) => {
  const { base } = typography({ weight, italic, underline });
  return (
    <p {...props} className={base({ className })}>
      {children}
    </p>
  );
};

const variants = typographyVariants.reduce(
  (acc, variant) => ({
    ...acc,
    [variant.name]: ({
      className,
      children,
      weight,
      italic,
      underline,
      ...props
    }: TypographyType) => {
      const Tag = variant.tag;
      const { [variant.variant]: typographyVariant } = typography({ weight, italic, underline });
      return (
        <Tag {...props} className={typographyVariant({ className })}>
          {children}
        </Tag>
      );
    },
  }),
  {} as Record<TypographyComponentPossibleNames, FC<TypographyType>>,
);

export const Typography = Object.assign(TypographyBase, variants) as TypographyComponent;
