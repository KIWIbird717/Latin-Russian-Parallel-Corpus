import { CorpusSearchTextResult, Word } from "@/shared/lib/msw/handlers/types";
import { cn } from "@/shared/lib/utils";
import { Card } from "@/shared/ui/Card";
import { FC, useState } from "react";
import { Typography } from "@/shared/ui/Typography";
import XSvg from "@/public/svg/x.svg";
import { Modal } from "@/shared/ui/Modal";
import { List } from "@/shared/ui/List";

type TokensReaderProps = {
  tokens: CorpusSearchTextResult["text"];
  searchedWord: string;
};

export const TokensReader: FC<TokensReaderProps> = ({ tokens, searchedWord }) => {
  const [modal, setModal] = useState<{ isOpen: boolean; word: Word | null }>({
    isOpen: false,
    word: null,
  });
  const sentences: (Word | string)[][] = [];
  let currentSentence: (Word | string)[] = [];

  tokens.forEach((token) => {
    if (typeof token === "string" && /[.!?]/.test(token)) {
      currentSentence.push(token);
      sentences.push([...currentSentence]);
      currentSentence = [];
    } else {
      currentSentence.push(token);
    }
  });

  if (currentSentence.length > 0) {
    sentences.push(currentSentence);
  }

  return (
    <>
      <Modal isOpen={modal.isOpen} onClose={() => setModal({ isOpen: false, word: null })}>
        <MorphModalContent
          word={modal.word}
          onClose={() => setModal({ isOpen: false, word: null })}
        />
      </Modal>
      <Card className="bg-background-200 p-sm border-0">
        <div className="flex flex-col gap-2">
          {sentences.map((sentence, index) => (
            <div key={index} className="flex flex-wrap gap-1">
              {sentence.map((token, tokenIndex) => {
                if (typeof token === "string") {
                  return (
                    <Typography.Body key={tokenIndex} className="text-text-500">
                      {token}
                    </Typography.Body>
                  );
                }

                const isSearchedWord = token.value.toLowerCase() === searchedWord.toLowerCase();

                return (
                  <div key={token.id} className="group relative inline-block">
                    <Typography.Body
                      onClick={() => setModal({ isOpen: true, word: token })}
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
          ))}
        </div>
      </Card>
    </>
  );
};

type MorphModalContentProps = {
  onClose?: () => void;
  word: Word | null;
};
const MorphModalContent: FC<MorphModalContentProps> = (props) => {
  if (!props.word) return null;
  return (
    <Card className="bg-background-100 gap-lg flex max-w-[420px] flex-col">
      <div className="gap-lg flex w-fit items-start">
        <div className="gap-micro flex flex-col">
          <Typography.Body weight="bold">Морфологический анализ</Typography.Body>
          <Typography.Small className="text-text-200">
            Подробная морфологическая информация по выбранному слову.
          </Typography.Small>
        </div>
        <button className="cursor-pointer p-[5px]" onClick={props.onClose}>
          <XSvg />
        </button>
      </div>

      <div className="gap-micro flex flex-col text-center">
        <Typography.Heading4 weight="bold">{props.word.value}</Typography.Heading4>
        <Typography.Small className="text-text-200">{props.word.description}</Typography.Small>
      </div>

      <List items={props.word.properties} />

      {props.word.note && (
        <div className="flex flex-col">
          <Typography.Small weight="bold">Примечания:</Typography.Small>
          <Typography.Small className="text-text-200">{props.word.note}</Typography.Small>
        </div>
      )}
    </Card>
  );
};
