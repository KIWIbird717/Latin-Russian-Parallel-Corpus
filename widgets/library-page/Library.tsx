"use client";

import { useCustomQuery } from "@/shared/hooks/use-query";
import { FilterType, Translation } from "@/shared/lib/msw/handlers/types";
import { MockService } from "@/shared/services/mock";
import { Card } from "@/shared/ui/Card";
import { Search } from "@/shared/ui/Search";
import { Tabs } from "@/shared/ui/Tabs";
import { Typography } from "@/shared/ui/Typography";
import { FC } from "react";
import BookTranslationSvg from "@/public/svg/book-translation.svg";
import { Badge } from "@/shared/ui/Badge";
import { capitalize } from "@/shared/utils/capitalize";
import BookOpen from "@/public/svg/book-open.svg";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import { Loader } from "@/shared/ui/Loader";

export const Library: FC = () => {
  const { data, isLoading } = useCustomQuery({
    queryKey: [],
    queryFn: () => MockService.getBooks(),
  });

  return (
    <>
      <LibraryFilters />
      <div className="gap-md flex flex-col">
        {isLoading ? (
          <Loader size="large" />
        ) : (
          data?.books?.map((book) => (
            <BookCard key={`book-${book.id}`} title={book.title} translations={book.translations} />
          ))
        )}
      </div>
    </>
  );
};

const LibraryFilters: FC = () => {
  return (
    <section className="gap-xl flex items-center">
      <Search label="Поиск книги" placeholder="Название книги" className="w-[250px]" />
      <Tabs
        id="LibraryFilters"
        label="Сортировка"
        className="max-w-[473px]"
        tabs={[
          { id: 1, label: "По автору", data: FilterType.AUTHOR },
          { id: 2, label: "По книге", data: FilterType.TITLE },
          { id: 3, label: "По дате", data: FilterType.DATE },
        ]}
      />
    </section>
  );
};

type BookCardProps = {
  title: string;
  translations: Translation[];
};
const BookCard: FC<BookCardProps> = (props) => {
  return (
    <Card className="bg-background-200">
      <Typography.Heading4>{props.title}</Typography.Heading4>
      <div className="gap-sm flex flex-col">
        {props.translations.map((translation) => (
          <BookTranslationCard
            key={`book-translation-${translation.id}`}
            translation={translation}
          />
        ))}
      </div>
    </Card>
  );
};

type BookTranslationCardProps = { translation: Translation };
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
      <ButtonLink href={""} variant="secondary" className="h-[30px]">
        <BookOpen />
        Читать
      </ButtonLink>
    </Card>
  );
};
