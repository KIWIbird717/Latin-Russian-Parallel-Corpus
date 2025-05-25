import { FC } from "react";
import { Typography } from "@/shared/ui/Typography";
import { cn } from "@/shared/lib/utils";
import { Skeleton } from "@/shared/ui/Skeleton";
import { capitalize } from "@/shared/utils/capitalize";
import { AnimatePresence, motion } from "motion/react";

type LocaleStatisticProps = {
  data: Record<string, number>;
  colors: Record<string, string>;
};

export const LocaleStatistic: FC<LocaleStatisticProps> = ({ data, colors }) => {
  return (
    <div className="flex flex-col items-start">
      <AnimatePresence>
        {Object.entries(data).length
          ? Object.entries(data).map(([locale, value]) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-3"
                key={`${locale}-label`}
              >
                <div className="col-span-2">
                  <div className="gap-micro flex items-center justify-start">
                    <div className={cn("h-[9px] w-[9px] rounded-full", colors[locale])} />
                    <Typography.Body>{capitalize(locale)}</Typography.Body>
                  </div>
                </div>
                <div key={`${locale}-value`} className="col-span-1">
                  <Typography.Body>{value}</Typography.Body>
                </div>
              </motion.div>
            ))
          : Array.from({ length: 3 }).map((item, index) => (
              <div className="grid grid-cols-3" key={`${index}-label-skeleton`}>
                <Skeleton className="col-span-2 mb-[3px] h-[15px] w-full" />
                <Skeleton className="col-span-1 mb-[3px] h-[15px] w-full" />
              </div>
            ))}
      </AnimatePresence>
    </div>
  );
};
