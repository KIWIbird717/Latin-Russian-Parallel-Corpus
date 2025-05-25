"use client";

import { FC, useMemo } from "react";
import { Typography } from "@/shared/ui/Typography";
import { Skeleton } from "@/shared/ui/Skeleton";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "motion/react";
import { CountUp } from "@/shared/ui/CountUp";

type AuthorStatisticProps = {
  data: {
    authors: number;
    translations: number;
    total: number;
  };
};

export const AuthorStatistic: FC<AuthorStatisticProps> = ({ data }) => {
  const t = useTranslations("Statistics.authors-statistics");

  const items = useMemo(
    () => [
      { label: t("authors"), value: data?.authors },
      { label: t("translations"), value: data?.translations },
      { label: t("total"), value: data?.total },
    ],
    [t, data],
  );

  return (
    <div className="gap-sm flex flex-col items-start">
      <AnimatePresence>
        {items.map(({ label, value }) =>
          value ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid w-full grid-cols-3"
              key={`${label}-label`}
            >
              <div className="col-span-2">
                <div className="gap-micro flex items-center justify-start">
                  <Typography.Body>{label}</Typography.Body>
                </div>
              </div>
              <div className="col-span-1">
                <Typography.Body>
                  <CountUp to={value} from={0} decimalPartLength={0} />
                </Typography.Body>
              </div>
            </motion.div>
          ) : (
            <div className="grid w-full grid-cols-3" key={`authors-statistics-skeleton-${label}`}>
              <Skeleton className="col-span-2 mb-[3px] h-[15px] w-full" />
              <Skeleton className="col-span-1 mb-[3px] h-[15px] w-full" />
            </div>
          ),
        )}
      </AnimatePresence>
    </div>
  );
};
