"use client";

import { FilterType } from "@/shared/lib/msw/handlers/types";
import { Search } from "@/shared/ui/Search";
import { Tabs, TabsProps } from "@/shared/ui/Tabs";
import { ChangeEventHandler, FC } from "react";
import { cn } from "@/shared/utils/cn";

type LibraryFiltersProps = {
  onSearchChange?: ChangeEventHandler<HTMLInputElement>;
  onTabChange?: TabsProps<FilterType>["onChange"];
  isLoading?: boolean;
};
export const LibraryFilters: FC<LibraryFiltersProps> = (props) => {
  return (
    <section className="gap-xl flex items-center">
      <Search
        onChange={props.onSearchChange}
        label="Поиск книги"
        placeholder="Название книги"
        className="w-[350px]"
      />
      <Tabs
        id="LibraryFilters"
        label="Сортировка"
        className={cn("max-w-[473px]", props.isLoading && "pointer-events-none opacity-50")}
        onChange={props.onTabChange}
        tabs={[
          { id: 1, label: "По автору", data: FilterType.AUTHOR },
          { id: 2, label: "По книге", data: FilterType.TITLE },
          { id: 3, label: "По дате", data: FilterType.DATE },
        ]}
      />
    </section>
  );
};
