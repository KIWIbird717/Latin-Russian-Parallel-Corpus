import { ComponentProps, FC } from "react";
import { typography, typographyVariants } from ".";
import { VariantProps } from "tailwind-variants";

export type TypographyType = ComponentProps<"p"> & VariantProps<typeof typography>;

export type TypographyComponentPossibleNames =
  | "Heading1"
  | "Heading2"
  | "Heading3"
  | "Heading4"
  | "Body"
  | "Smal"
  | "Micro";

export type TypographyVarinat = {
  name: TypographyComponentPossibleNames;
  tag: keyof Pick<HTMLElementTagNameMap, "h1" | "h2" | "h3" | "h4" | "p" | "span">;
  variant: keyof typeof typography.slots;
};

export type TypographyComponent = FC<TypographyType> & {
  [K in (typeof typographyVariants)[number]["name"]]: FC<TypographyType>;
};
