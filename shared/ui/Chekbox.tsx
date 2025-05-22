import { Checkbox as AriaCheckbox } from "react-aria-components";
import { FC } from "react";
import { cn } from "@/shared/utils/cn";
import { Typography } from "./Typography";

interface CheckboxProps {
  isSelected?: boolean;
  onChange?: (isSelected: boolean) => void;
  isDisabled?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const Checkbox: FC<CheckboxProps> = ({
  isSelected,
  onChange,
  isDisabled,
  children,
  className,
}) => {
  return (
    <AriaCheckbox
      isSelected={isSelected}
      onChange={onChange}
      isDisabled={isDisabled}
      className={`flex cursor-pointer items-center gap-2 ${className}`}
    >
      <div
        className={cn(
          "border-border-stroke bg-background-100 flex h-4 w-4 items-center justify-center rounded border transition-all duration-200",
          isSelected && "border-text-500 bg-text-500",
        )}
      >
        <svg
          viewBox="0 0 12 12"
          fill="none"
          className={cn(
            "h-3 w-3 text-white transition-all duration-200",
            isSelected ? "scale-100 opacity-100" : "scale-0 opacity-0",
          )}
        >
          <path
            d="M10 3L4.5 8.5L2 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <Typography.Small>{children}</Typography.Small>
    </AriaCheckbox>
  );
};
