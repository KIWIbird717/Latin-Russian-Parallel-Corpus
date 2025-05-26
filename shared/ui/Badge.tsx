import { ComponentProps, FC } from "react";
import { cn } from "../lib/utils";

type BadgeProps = ComponentProps<"span">;
export const Badge: FC<BadgeProps> = ({ children, className, ...props }) => {
  return (
    <span
      {...props}
      className={cn(
        "bg-background-200 border-border-stroke px-md font-inter text-text-200 rounded-sm border py-[1px] text-[12px] font-semibold",
        className,
      )}
    >
      {children}
    </span>
  );
};
