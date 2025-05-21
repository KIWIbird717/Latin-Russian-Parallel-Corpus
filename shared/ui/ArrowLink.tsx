import { ComponentProps, FC } from "react";
import { Link } from "../i18n/navigation";
import ArrowSvg from "@/public/svg/arrow-right.svg";
import { cn } from "../utils/cn";
import { Typography } from "./Typography";

type ArrowLinkProps = ComponentProps<typeof Link>;
export const ArrowLink: FC<ArrowLinkProps> = ({ children, className, ...props }) => {
  return (
    <Link
      {...props}
      className={cn(
        "gap-sm text flex w-fit items-center justify-between duration-50 ease-in-out hover:opacity-80",
        className,
      )}
    >
      <Typography.Body weight="bold">{children}</Typography.Body>
      <ArrowSvg />
    </Link>
  );
};
