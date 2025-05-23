import { ComponentProps, FC, ReactNode } from "react";
import { cn } from "../lib/utils";
import { Typography } from "./Typography";

type ListProps = ComponentProps<"div"> & {
  items: { id: number | string; label: ReactNode; value: ReactNode }[];
};
export const List: FC<ListProps> = ({ items, className, ...props }) => {
  return (
    <div {...props} className={cn("border-border-stroke rounded-sm border", className)}>
      <div className="border-border-stroke bg-background-200 grid w-full grid-cols-2 border-b px-[12px] py-[5px] last:border-0">
        <Typography.Small weight="bold">Свойство</Typography.Small>
        <Typography.Small weight="bold">Значение</Typography.Small>
      </div>
      {items.map((item) => (
        <div
          key={`list-item-${item.id}`}
          className="border-border-stroke grid w-full grid-cols-2 border-b px-[12px] py-[5px] last:border-0"
        >
          <Typography.Small>{item.label}</Typography.Small>
          <Typography.Small>{item.value}</Typography.Small>
        </div>
      ))}
    </div>
  );
};
