"use client";

import { ComponentProps, FC } from "react";
import { tv, VariantProps } from "tailwind-variants";

const variants = tv({
  base: "flex gap-sm rounded-sm py-[7px] px-[20px] font-inter text-[15px] cursor-pointer transition-all duration-50 active:scale-95 ease-in-out",
  variants: {
    variant: {
      primary: "bg-primary-300 text-text-100 hover:bg-primary-200",
      secondary: "bg-transparent border border-border-stroke hover:bg-background-200",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof variants>;
export const Button: FC<ButtonProps> = ({ children, className, variant, ...props }) => {
  return (
    <button {...props} className={variants({ variant, className })}>
      {children}
    </button>
  );
};
