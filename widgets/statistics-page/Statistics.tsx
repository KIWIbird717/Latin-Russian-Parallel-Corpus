"use client";

import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { MockService } from "@/shared/services/mock";
import DatabaseSvg from "@/public/svg/database.svg";
import PieChartSvg from "@/public/svg/pie-chart.svg";
import UsersSvg from "@/public/svg/users.svg";
import { useTranslations } from "next-intl";
import { AuthorStatistic } from "./components/AuthorStatistic";
import { LocaleStatistic } from "./components/LocaleStatistic";
import { NumberStatistic } from "./components/NumberStatistic";
import { StatisticCard } from "@/entities/statistics-page/StatisticCard";

export const Statistics: FC = () => {
  const t = useTranslations("Statistics");

  const { data } = useQuery({
    queryKey: ["/info-stats"],
    queryFn: MockService.getStatistics,
  });

  const localeColors = {
    latin: "bg-primary-300",
    russian: "bg-primary-200",
    greek: "bg-primary-100",
  };

  return (
    <div className="flex flex-col gap-[12px]">
      <div className="flex w-full gap-[12px]">
        <StatisticCard title={t("vsego-slovoform")} icon={<DatabaseSvg />}>
          <NumberStatistic value={data?.data?.totalWordFormation} description={t("total-words")} />
        </StatisticCard>
        <StatisticCard title={t("formy-slov-s-morfologiei")} icon={<DatabaseSvg />}>
          <NumberStatistic
            value={data?.data?.totalMorphologyForms}
            description={t("morphologic-words")}
          />
        </StatisticCard>
      </div>

      <div className="flex w-full gap-[12px]">
        <StatisticCard title={t("words-with-forms-by-locale")} icon={<PieChartSvg />}>
          <LocaleStatistic data={data?.data?.wordsWithFormsByLocale || {}} colors={localeColors} />
        </StatisticCard>

        <StatisticCard title={t("morphs-by-locale")} icon={<PieChartSvg />}>
          <LocaleStatistic data={data?.data?.morphologiesByLocale || {}} colors={localeColors} />
        </StatisticCard>

        <StatisticCard title={t("authors-and-translations")} icon={<UsersSvg />}>
          <AuthorStatistic
            data={data?.data?.authorsAndTranslations || { authors: 0, translations: 0, total: 0 }}
          />
        </StatisticCard>
      </div>
    </div>
  );
};
