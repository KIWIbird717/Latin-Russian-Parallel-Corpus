"use client";

import { cn } from "@/shared/lib/utils";
import { Search } from "@/shared/ui/Search";
import { Tabs } from "@/shared/ui/Tabs";
import { FC } from "react";
import { AuthorAndOperasFilters } from "./components/AuthorAndOperasFilters";
import { MorphologicFilters } from "./components/MorphologicFilters";

type MorphSearchingFiltersProps = { className?: string };
export const MorphSearchingFilters: FC<MorphSearchingFiltersProps> = ({ className }) => {
  return (
    <form className={cn("gap-md flex flex-col", className)}>
      <Tabs
        id={"search-filters"}
        className="w-full"
        tabs={[
          { id: 1, label: "Словоформа" },
          { id: 2, label: "Лемма" },
        ]}
      />
      <Search label="Поисковый запрос" placeholder="Введите слово" />

      <AuthorAndOperasFilters />
      <MorphologicFilters />
    </form>
  );
};
