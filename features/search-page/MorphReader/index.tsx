"use client";

import { CorpusSearchTextResult } from "@/shared/types/mock";
import { cn } from "@/shared/lib/utils";
import { Card } from "@/shared/ui/Card";
import { FC } from "react";
import SearchSvg from "@/public/svg/search.svg";
import { Typography } from "@/shared/ui/Typography";
import { useTranslations } from "next-intl";
import { TokensReader } from "@/entities/common/TokensReader";
import { AnimatePresence, motion } from "motion/react";

type MorphReaderProps = { className?: string; morphResponse: CorpusSearchTextResult[] | null };
export const MorphReader: FC<MorphReaderProps> = ({ className, morphResponse }) => {
  return (
    <Card className={cn("min-h-[700px]", className)}>
      <AnimatePresence>
        {morphResponse ? <SearchResults morphResponse={morphResponse} /> : <NoResults />}
      </AnimatePresence>
    </Card>
  );
};

type SearchResultsProps = {
  morphResponse: CorpusSearchTextResult[];
};
const SearchResults: FC<SearchResultsProps> = (props) => {
  const t = useTranslations("SearchResults");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="gap-lg flex flex-col"
    >
      <div className="gap-micro flex flex-col">
        <Typography.Heading4>Результаты поиска</Typography.Heading4>
        <Typography.Small className="text-text-200">
          {t("search-results", { count: props.morphResponse.length })}
        </Typography.Small>
      </div>

      <div className="gap-md flex flex-col">
        {props.morphResponse.map((result) => (
          <SourceResult key={result.sourceId} searchResult={result} />
        ))}
      </div>
    </motion.div>
  );
};

type SourceResultProps = {
  searchResult: CorpusSearchTextResult;
};
const SourceResult: FC<SourceResultProps> = ({ searchResult }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col gap-[5px]"
    >
      <Typography.Small>
        <span className="font-bold">Источник:</span> {searchResult.source}
      </Typography.Small>
      <TokensReader tokens={searchResult.text} searchedWord={searchResult.searchedWord} />
    </motion.div>
  );
};

const NoResults: FC = () => {
  return (
    <div className="flex w-full items-center justify-center py-[100px]">
      <div className="gap-sm flex max-w-[350px] flex-col items-center text-center">
        <SearchSvg className="scale-200" />
        <Typography.Heading4>Пока нет результатов поиска</Typography.Heading4>
        <Typography.Small className="text-text-200">
          Для поиска текстов в корпусе воспользуйтесь формой поиска.
        </Typography.Small>
      </div>
    </div>
  );
};
