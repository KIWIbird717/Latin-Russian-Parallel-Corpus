import { ComponentProps, FC, ReactNode } from "react";
import { Typography } from "./Typography";
import { cn } from "../utils/cn";

type InputProps = ComponentProps<"input"> & { label?: ReactNode; icon?: ReactNode };
export const Input: FC<InputProps> = ({ className, label, icon, ...props }) => {
  return (
    <div className="gap-micro relative flex max-w-[500px] flex-col">
      {label && <Typography.Small className="pl-[3px]">{label}</Typography.Small>}
      <input
        {...props}
        className={cn(
          "border-border-stroke active:border-border-stroke px-sm py-sm font-inter focus-within:ring-primary-100 rounded-sm border text-[14px] transition duration-200 ease-out outline-none focus-within:ring-2",
          icon && "pr-[33px]",
          className,
        )}
      />
      {icon && <div className="absolute top-1/2 right-[8px] -translate-y-0.5">{icon}</div>}
    </div>
  );
};
