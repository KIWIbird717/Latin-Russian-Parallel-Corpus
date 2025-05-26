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
import { useMutation } from "@tanstack/react-query";
import { MockService } from "@/shared/services/mock";
import { CorpusSearchTextResult } from "@/shared/types/mock";
import toast from "react-hot-toast";

type MorphSearchingFiltersProps = {
  className?: string;
  onMorphResponse: (res: CorpusSearchTextResult[]) => void;
};
export const MorphSearchingFilters: FC<MorphSearchingFiltersProps> = ({
  className,
  onMorphResponse,
}) => {
  const t = useTranslations("Filters");

  const { mutate } = useMutation({
    mutationKey: ["GET /corpus-search"],
    mutationFn: MockService.getCorpusSearch,
    onSuccess: (res) => {
      toast.success(t("success", { count: res.results.length }));
      onMorphResponse(res.results);
    },
    onError: () => toast.error(t("no-texts-error")),
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    const loader = toast.loading("Поиск...");
    event.preventDefault();
    mutate(undefined, {
      onSettled: () => toast.dismiss(loader),
    });
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
