import { FC, useState } from "react";
import { Card } from "@/shared/ui/Card";
import { Translation } from "@/shared/lib/msw/handlers/types";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import { cn } from "@/shared/utils/cn";
import { LocaleReader } from "./LocaleReader";
import { Pagination } from "./Pagination";

export enum View {
  VERTICAL = "VERTICAL",
  HORIZONTAL = "HORIZONTAL",
}

const MotionCard = motion.create(Card);

type TranslationsReaderProps = { translations: Translation[]; view: View };

export const TranslationsReader: FC<TranslationsReaderProps> = (props) => {
  const [page, setPage] = useState(0);

  return (
    <motion.div layout className="gap-md animate-fade-in flex flex-col">
      <MotionCard
        layout
        className={cn("gap-md flex", props.view === View.VERTICAL ? "flex-col" : "flex-row")}
      >
        <AnimatePresence mode="wait">
          {props.translations.map((translation) => (
            <LocaleReader
              page={page}
              key={`tokens-reader-${translation.id}-${props.view}`}
              translation={translation}
            />
          ))}
        </AnimatePresence>
      </MotionCard>
      <Pagination page={page} setPage={setPage} totalPages={props.translations[0].pages.length} />
    </motion.div>
  );
};
