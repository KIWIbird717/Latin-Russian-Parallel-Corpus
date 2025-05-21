"use client";

import { ComponentProps, FC } from "react";
import { tv, VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
  base: "flex gap-sm rounded-sm justify-center items-center py-[7px] px-[20px] font-inter text-[15px] cursor-pointer transition-all duration-50 active:scale-95 ease-in-out max-w-[600px]",
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

export type ButtonVariants = VariantProps<typeof buttonVariants>;

type ButtonProps = ComponentProps<"button"> & ButtonVariants;
export const Button: FC<ButtonProps> = ({ children, className, variant, ...props }) => {
  return (
    <button {...props} className={buttonVariants({ variant, className })}>
      {children}
    </button>
  );
};
