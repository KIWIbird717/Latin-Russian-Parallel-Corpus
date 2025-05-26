import { Word } from "@/shared/types/mock";
import { cn } from "@/shared/lib/utils";
import { FC } from "react";
import { Typography } from "@/shared/ui/Typography";

type ReaderSentenceProps = {
  sentence: (string | Word)[];
  /**
   * Слово по которому происходил поиск, нужно для хайлайта
   */
  searchedWord?: string;
  onWordClick?: (token: Word) => void;
};
export const ReaderSentence: FC<ReaderSentenceProps> = (props) => {
  return (
    <div className="flex flex-wrap gap-1">
      {props.sentence.map((token, tokenIndex) => {
        if (typeof token === "string") {
          return (
            <Typography.Body key={tokenIndex} className="text-text-500">
              {token}
            </Typography.Body>
          );
        }

        const isSearchedWord = token.value.toLowerCase() === props?.searchedWord?.toLowerCase();

        return (
          <div key={token.id} className="group relative inline-block">
            <Typography.Body
              onClick={() => props.onWordClick?.(token)}
              className={cn(
                "text-text-500 group-hover:text-primary-300 cursor-pointer transition-colors group-hover:underline group-hover:decoration-dotted group-hover:underline-offset-4",
                isSearchedWord && "bg-accent-200 rounded-[3px] px-[3px]",
              )}
            >
              {token.value}
            </Typography.Body>
          </div>
        );
      })}
    </div>
  );
};
