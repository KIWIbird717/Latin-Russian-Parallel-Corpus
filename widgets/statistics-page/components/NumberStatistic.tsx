"use client";

import { FC } from "react";
import { Typography } from "@/shared/ui/Typography";
import { Skeleton } from "@/shared/ui/Skeleton";

const formatter = new Intl.NumberFormat();

type NumberStatisticProps = {
  value?: number;
  description: string;
};

export const NumberStatistic: FC<NumberStatisticProps> = ({ value, description }) => {
  return (
    <div className="gap-sm flex flex-col">
      {value ? (
        <Typography.Heading3 weight="bold">{formatter.format(value)}</Typography.Heading3>
      ) : (
        <Skeleton className="h-[34px] w-[215px]" />
      )}
      <Typography.Small>{description}</Typography.Small>
    </div>
  );
};
