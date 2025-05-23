"use client";

import { ComponentProps, FC, ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { MockService } from "@/shared/services/mock";
import { Typography } from "@/shared/ui/Typography";
import { Card } from "@/shared/ui/Card";
import { cn } from "@/shared/lib/utils";
import DatabaseSvg from "@/public/svg/database.svg";
import { Skeleton } from "@/shared/ui/Skeleton";
import PieChartSvg from "@/public/svg/pie-chart.svg";
import UsersSvg from "@/public/svg/users.svg";

const formatter = new Intl.NumberFormat();

export const Statistics: FC = () => {
  const { data } = useQuery({
    queryKey: ["/statistics-info"],
    queryFn: MockService.getStatistics,
  });

  return (
    <div className="flex flex-col gap-[12px]">
      <div className="flex w-full gap-[12px]">
        <StatisticCard title="Всего Словоформ" icon={<DatabaseSvg />}>
          <div className="gap-sm flex flex-col">
            {data?.data?.totalWordFormation ? (
              <Typography.Heading3 weight="bold">
                {formatter.format(data?.data.totalWordFormation)}
              </Typography.Heading3>
            ) : (
              <Skeleton className="h-[34px] w-[215px]" />
            )}
            <Typography.Small>Общее количество словоформ в корпусе</Typography.Small>
          </div>
        </StatisticCard>
        <StatisticCard title="Формы слов с Морфологией" icon={<DatabaseSvg />}>
          <div className="gap-sm flex flex-col">
            {data?.data?.totalWordFormation ? (
              <Typography.Heading3 weight="bold">
                {formatter.format(data?.data.totalMorphologyForms)}
              </Typography.Heading3>
            ) : (
              <Skeleton className="h-[34px] w-[215px]" />
            )}
            <Typography.Small>Словоформы с морфологической информацией</Typography.Small>
          </div>
        </StatisticCard>
      </div>

      <div className="flex w-full gap-[12px]">
        <StatisticCard title="Формы слов с Морфологией" icon={<PieChartSvg />}>
          <div className="grid grid-cols-3 items-start">
            <div className="col-span-2">
              <div className="gap-micro flex items-center justify-start">
                <div className="bg-primary-300 h-[9px] w-[9px] rounded-full" />
                <Typography.Body>Latin</Typography.Body>
              </div>
            </div>
            <div className="col-span-1">
              <Typography.Body>{data?.data.wordsWithFormsByLocale.latin}</Typography.Body>
            </div>
            <div className="col-span-2">
              <div className="gap-micro flex items-center justify-start">
                <div className="bg-primary-200 h-[9px] w-[9px] rounded-full" />
                <Typography.Body>Russian</Typography.Body>
              </div>
            </div>
            <div className="col-span-1">
              <Typography.Body>{data?.data.wordsWithFormsByLocale.russian}</Typography.Body>
            </div>
            <div className="col-span-2">
              <div className="gap-micro flex items-center justify-start">
                <div className="bg-primary-100 h-[9px] w-[9px] rounded-full" />
                <Typography.Body>Greek</Typography.Body>
              </div>
            </div>
            <div className="col-span-1">
              <Typography.Body>{data?.data.wordsWithFormsByLocale.greek}</Typography.Body>
            </div>
          </div>
        </StatisticCard>

        <StatisticCard title="Формы слов с Морфологией" icon={<PieChartSvg />}>
          <div className="grid grid-cols-3 items-start">
            <div className="col-span-2">
              <div className="gap-micro flex items-center justify-start">
                <div className="bg-primary-300 h-[9px] w-[9px] rounded-full" />
                <Typography.Body>Latin</Typography.Body>
              </div>
            </div>
            <div className="col-span-1">
              <Typography.Body>{data?.data.morphologiesByLocale.latin}</Typography.Body>
            </div>
            <div className="col-span-2">
              <div className="gap-micro flex items-center justify-start">
                <div className="bg-primary-200 h-[9px] w-[9px] rounded-full" />
                <Typography.Body>Russian</Typography.Body>
              </div>
            </div>
            <div className="col-span-1">
              <Typography.Body>{data?.data.morphologiesByLocale.russian}</Typography.Body>
            </div>
            <div className="col-span-2">
              <div className="gap-micro flex items-center justify-start">
                <div className="bg-primary-100 h-[9px] w-[9px] rounded-full" />
                <Typography.Body>Greek</Typography.Body>
              </div>
            </div>
            <div className="col-span-1">
              <Typography.Body>{data?.data.morphologiesByLocale.greek}</Typography.Body>
            </div>
          </div>
        </StatisticCard>

        <StatisticCard title="Авторы и Переводы" icon={<UsersSvg />}>
          <div className="grid grid-cols-3 items-start">
            <div className="col-span-2">
              <div className="gap-micro flex items-center justify-start">
                <Typography.Body>Авторы</Typography.Body>
              </div>
            </div>
            <div className="col-span-1">
              <Typography.Body>{data?.data.authorsAndTranslations.authors}</Typography.Body>
            </div>
            <div className="col-span-2">
              <div className="gap-micro flex items-center justify-start">
                <Typography.Body>Переводы</Typography.Body>
              </div>
            </div>
            <div className="col-span-1">
              <Typography.Body>{data?.data.authorsAndTranslations.translations}</Typography.Body>
            </div>
            <div className="col-span-2">
              <div className="gap-micro flex items-center justify-start">
                <Typography.Body>Всего</Typography.Body>
              </div>
            </div>
            <div className="col-span-1">
              <Typography.Body>{data?.data.authorsAndTranslations.total}</Typography.Body>
            </div>
          </div>
        </StatisticCard>
      </div>
    </div>
  );
};

type StatisticCardProps = ComponentProps<typeof Card> & { title: string; icon: ReactNode };
const StatisticCard: FC<StatisticCardProps> = ({ title, className, children, icon, ...props }) => {
  return (
    <Card className={cn("bg-accent-100 p-xl w-full", className)} {...props}>
      <div className="flex w-full items-center justify-between">
        <Typography.Body weight="bold">{title}</Typography.Body>
        {icon}
      </div>
      {children}
    </Card>
  );
};
