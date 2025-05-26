"use client";

import { Author, BookWithoutPages, Translation } from "@/shared/types/mock";
import { Card } from "@/shared/ui/Card";
import { Typography } from "@/shared/ui/Typography";
import { FC } from "react";
import { motion } from "motion/react";
import BookTranslationSvg from "@/public/svg/book-translation.svg";
import { Badge } from "@/shared/ui/Badge";
import { capitalize } from "@/shared/utils/capitalize";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import { IconBookOpen } from "@intentui/icons";

const MotionCard = motion.create(Card);
type BookCardProps = {
  bookId: string;
  title: string;
  author: Author;
  translations: BookWithoutPages["translations"];
};
export const BookCard: FC<BookCardProps> = (props) => {
  return (
    <MotionCard
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background-200"
    >
      <div className="gap-micro flex flex-col">
        <Typography.Heading4>{props.title}</Typography.Heading4>
        <Typography.Small className="text-text-200">
          Автор: {props.author.firstName} {props.author.lastName}
        </Typography.Small>
      </div>
      <div className="gap-sm flex flex-col">
        {props.translations.map((translation) => (
          <BookTranslationCard
            key={`book-translation-${translation.id}`}
            translation={translation}
            bookId={props.bookId}
          />
        ))}
      </div>
    </MotionCard>
  );
};

type BookTranslationCardProps = { translation: Omit<Translation, "pages">; bookId: string };
const BookTranslationCard: FC<BookTranslationCardProps> = (props) => {
  return (
    <Card className="bg-background-100 flex flex-row justify-between">
      <div className="gap-sm flex">
        <BookTranslationSvg />
        <div className="gap-micro flex max-w-[600px] flex-col">
          <div className="gap-sm flex items-center">
            <Typography.Body weight="bold">{props.translation.title}</Typography.Body>
            <Badge>{capitalize(props.translation.locale)}</Badge>
          </div>
          <Typography.Small className="text-text-200">
            {props.translation.description}
          </Typography.Small>
        </div>
      </div>
      <ButtonLink href={`library/${props.bookId}`} variant="secondary" className="h-[30px]">
        <IconBookOpen />
        Читать
      </ButtonLink>
    </Card>
  );
};
