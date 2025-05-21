"use client";

import { ComponentProps, FC } from "react";
import { Link } from "../i18n/navigation";
import { buttonVariants, ButtonVariants } from "./Button";

type ButtonLinkProps = ComponentProps<typeof Link> & ButtonVariants;
export const ButtonLink: FC<ButtonLinkProps> = ({ children, variant, className, ...props }) => {
  return (
    <Link {...props} className={buttonVariants({ variant, className })}>
      {children}
    </Link>
  );
};
