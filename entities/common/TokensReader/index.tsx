import { CorpusSearchTextResult, Word } from "@/shared/types/mock";
import { Card } from "@/shared/ui/Card";
import { FC, useState, useMemo, useCallback } from "react";
import { Modal } from "@/shared/ui/Modal";
import { MorphModalContent } from "./components/MorphModalContent";
import { isEndOfSentence } from "./components/utils";
import { ReaderSentence } from "./components/ReaderSentence";

type TokensReaderProps = {
  tokens: CorpusSearchTextResult["text"];
  searchedWord?: string;
};

export const TokensReader: FC<TokensReaderProps> = ({ tokens, searchedWord }) => {
  const [modal, setModal] = useState<{ isOpen: boolean; word: Word | null }>({
    isOpen: false,
    word: null,
  });

  const sentences = useMemo(() => {
    const result: (Word | string)[][] = [];
    let currentSentence: (Word | string)[] = [];

    tokens?.forEach((token) => {
      if (isEndOfSentence(token)) {
        currentSentence.push(token);
        result.push([...currentSentence]);
        currentSentence = [];
      } else {
        currentSentence.push(token);
      }
    });

    if (currentSentence.length > 0) {
      result.push(currentSentence);
    }

    return result;
  }, [tokens]);

  const handleModalClose = useCallback(() => {
    setModal({ isOpen: false, word: null });
  }, []);

  const handleWordClick = useCallback((word: Word) => {
    setModal({ isOpen: true, word });
  }, []);

  return (
    <>
      <Modal isOpen={modal.isOpen} onClose={handleModalClose}>
        <MorphModalContent word={modal.word} onClose={handleModalClose} />
      </Modal>
      <Card className="bg-background-200 p-sm border-0">
        <div className="flex flex-col gap-2">
          {sentences.map((sentence, index) => (
            <ReaderSentence
              key={`reader-sentence-${index}`}
              sentence={sentence}
              searchedWord={searchedWord}
              onWordClick={handleWordClick}
            />
          ))}
        </div>
      </Card>
    </>
  );
};
