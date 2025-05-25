import { FC } from "react";
import { Typography } from "@/shared/ui/Typography";
import { cn } from "@/shared/lib/utils";
import { Skeleton } from "@/shared/ui/Skeleton";
import { capitalize } from "@/shared/utils/capitalize";
import { AnimatePresence, motion } from "motion/react";
import { CountUp } from "@/shared/ui/CountUp";

type LocaleStatisticProps = {
  data: Record<string, number>;
  colors: Record<string, string>;
};

export const LocaleStatistic: FC<LocaleStatisticProps> = ({ data, colors }) => {
  return (
    <div className="items-star gap-sm flex flex-col">
      <AnimatePresence>
        {Object.entries(data).length
          ? Object.entries(data).map(([locale, value]) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid w-full grid-cols-3"
                key={`${locale}-label`}
              >
                <div className="col-span-2">
                  <div className="gap-micro flex items-center justify-start">
                    <div className={cn("h-[9px] w-[9px] rounded-full", colors[locale])} />
                    <Typography.Body>{capitalize(locale)}</Typography.Body>
                  </div>
                </div>
                <div key={`${locale}-value`} className="col-span-1">
                  <Typography.Body>
                    <CountUp to={value} from={0} decimalPartLength={0} />
                  </Typography.Body>
                </div>
              </motion.div>
            ))
          : Array.from({ length: 3 }).map((_, index) => (
              <div className="grid w-full grid-cols-3" key={`${index}-label-skeleton`}>
                <Skeleton className="col-span-2 mb-[3px] h-[15px] w-full" />
                <Skeleton className="col-span-1 mb-[3px] h-[15px] w-full" />
              </div>
            ))}
      </AnimatePresence>
    </div>
  );
};
