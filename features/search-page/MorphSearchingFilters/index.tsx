"use client";

import { cn } from "@/shared/lib/utils";
import { Search } from "@/shared/ui/Search";
import { Tabs } from "@/shared/ui/Tabs";
import { FC, FormEventHandler } from "react";
import { AuthorAndOperasFilters } from "./components/AuthorAndOperasFilters";
import { MorphologicFilters } from "./components/MorphologicFilters";
import { CoreferencesFilters } from "./components/CoreferencesFilters";
import { Button } from "@/shared/ui/Button";
import { useTranslations } from "next-intl";
import SearchSvg from "@/public/svg/search.svg";
import toast from "react-hot-toast";

type MorphSearchingFiltersProps = { className?: string };
export const MorphSearchingFilters: FC<MorphSearchingFiltersProps> = ({ className }) => {
  const t = useTranslations("Filters");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    toast.success("huh");
  };

  return (
    <form onSubmit={handleSubmit} className={cn("gap-md flex flex-col", className)}>
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
      <Button>
        <SearchSvg className="[&_path]:stroke-white" />
        {t("search")}
      </Button>
    </form>
  );
};
