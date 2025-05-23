"use client";

import { cn } from "@/shared/lib/utils";
import { Search } from "@/shared/ui/Search";
import { Tabs } from "@/shared/ui/Tabs";
import { FC } from "react";
import { AuthorAndOperasFilters } from "./components/AuthorAndOperasFilters";
import { MorphologicFilters } from "./components/MorphologicFilters";
import { CoreferencesFilters } from "./components/CoreferencesFilters";
import { Button } from "@/shared/ui/Button";
import { useTranslations } from "next-intl";

type MorphSearchingFiltersProps = { className?: string };
export const MorphSearchingFilters: FC<MorphSearchingFiltersProps> = ({ className }) => {
  const t = useTranslations("Filters");

  return (
    <form className={cn("gap-md flex flex-col", className)}>
      <Tabs
        id={"search-filters"}
        className="w-full"
        tabs={[
          { id: 1, label: t("slovoforma") },
          { id: 2, label: t("lemma") },
        ]}
      />
      <Search label={t("poiskovyi-zapros")} placeholder={t("vvedite-slovo")} />

      <AuthorAndOperasFilters />
      <MorphologicFilters />
      <CoreferencesFilters />
      <Button>{t("search")}</Button>
    </form>
  );
};
