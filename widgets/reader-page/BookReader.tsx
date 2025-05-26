"use client";

import { MockService } from "@/shared/services/mock";
import { Typography } from "@/shared/ui/Typography";
import { useQuery } from "@tanstack/react-query";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { useRouter } from "@/shared/i18n/navigation";
import { Button } from "@/shared/ui/Button";
import { Skeleton } from "@/shared/ui/Skeleton";
import { Card } from "@/shared/ui/Card";
import { Translation } from "@/shared/lib/msw/handlers/types";
import { TokensReader } from "@/entities/common/TokensReader";
import { capitalize } from "@/shared/utils/capitalize";
import ChevronSvg from "@/public/svg/chevron.svg";

type BookReaderProps = {
  bookId: string;
};
export const BookReader: FC<BookReaderProps> = (props) => {
  const { data, isLoading } = useQuery({
    queryKey: ["GET /books/:id", props.bookId],
    queryFn: () => MockService.getBookById(props.bookId),
  });

  if (isLoading)
    return (
      <section className="gap-xl animate-fade-in flex flex-col">
        <div className="gap-sm flex flex-col">
          <Skeleton className="h-[40px] w-[400px]" />
          <Skeleton className="h-[50px] w-[600px]" />
        </div>
        <Skeleton className="h-[150px] w-full" />
      </section>
    );

  if (!data) return <NoSuchBook />;

  return (
    <section className="gap-xl animate-fade-in flex flex-col">
      <Title title={data?.book.title} description={data?.book.title} />
      <TranslationsReader translations={data.book.translations} />
    </section>
  );
};

type TranslationsReaderProps = { translations: Translation[] };
const TranslationsReader: FC<TranslationsReaderProps> = (props) => {
  const [page, setPage] = useState(0);

  return (
    <>
      <Card className="gap-md animate-fade-in flex flex-row">
        {props.translations.map((translation) => (
          <LocaleReader
            page={page}
            key={`tokens-reader-${translation.id}`}
            translation={translation}
          />
        ))}
      </Card>
      <Pagination page={page} setPage={setPage} totalPages={props.translations[0].pages.length} />
    </>
  );
};

type PaginationProps = {
  totalPages: number;
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
};
const Pagination: FC<PaginationProps> = (props) => {
  const hasPrevPage = props.page > 0;
  const hasNextPage = props.page < props.totalPages - 1;

  const prevPage = () => {
    props.setPage((state) => (hasPrevPage ? state - 1 : 0));
  };

  const nextPage = () => {
    props.setPage((state) => (hasNextPage ? state + 1 : props.totalPages - 1));
  };

  return (
    <div className="gap-md animate-fade-in flex w-full items-center justify-center">
      <Button variant="secondary" onClick={prevPage} disabled={!hasPrevPage}>
        <ChevronSvg className="-rotate-90" /> Предыдущий
      </Button>
      <Typography.Small className="text-text-200">
        {props.page + 1} из {props.totalPages} фрагментов
      </Typography.Small>
      <Button variant="secondary" onClick={nextPage} disabled={!hasNextPage}>
        Следующий <ChevronSvg className="rotate-90" />
      </Button>
    </div>
  );
};

type LocaleReaderProps = { translation: Translation; page: number };
const LocaleReader: FC<LocaleReaderProps> = (props) => {
  return (
    <div className="gap-sm flex w-full flex-col">
      <Typography.Body weight="bold" className="ml-micro">
        {capitalize(props.translation.locale)}
      </Typography.Body>
      <TokensReader tokens={props.translation.pages[props.page]} />
    </div>
  );
};

type TitleProps = {
  title: string;
  description: string;
};
const Title: FC<TitleProps> = (props) => {
  return (
    <div className="flex w-full justify-between">
      <div className="gap-sm flex flex-col">
        <Typography.Heading3>{props.title}</Typography.Heading3>
        <Typography.Small className="text-text-200">{props.description}</Typography.Small>
      </div>

      <div className="gap-sm flex items-center"></div>
    </div>
  );
};

const NoSuchBook: FC = () => {
  const router = useRouter();

  return (
    <div className="gap-md animate-fade-in flex min-h-[600px] w-full flex-col items-center justify-center">
      <Typography.Heading3>Такой книги не найдено</Typography.Heading3>
      <Button variant="secondary" onClick={() => router.back()}>
        Вернуться назад
      </Button>
    </div>
  );
};
