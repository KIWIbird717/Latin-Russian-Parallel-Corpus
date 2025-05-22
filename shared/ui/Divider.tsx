import { ComponentProps, FC } from "react";
import { cn } from "../utils/cn";

type DividerProps = ComponentProps<"div">;
export const Divider: FC<DividerProps> = ({ className, ...props }) => {
  return <div {...props} className={cn("bg-border-stroke h-[1px] w-full", className)} />;
};
