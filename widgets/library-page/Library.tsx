"use client";

import { useCustomQuery } from "@/shared/hooks/use-query";
import { Author, BookWithoutPages, FilterType, Translation } from "@/shared/lib/msw/handlers/types";
import { MockService } from "@/shared/services/mock";
import { Card } from "@/shared/ui/Card";
import { Search } from "@/shared/ui/Search";
import { Tabs, TabsProps, TabType } from "@/shared/ui/Tabs";
import { Typography } from "@/shared/ui/Typography";
import { ChangeEventHandler, FC, useState } from "react";
import BookTranslationSvg from "@/public/svg/book-translation.svg";
import { Badge } from "@/shared/ui/Badge";
import { capitalize } from "@/shared/utils/capitalize";
import BookOpen from "@/public/svg/book-open.svg";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import { Loader } from "@/shared/ui/Loader";
import debounce from "lodash.debounce";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/shared/utils/cn";

export const Library: FC = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(FilterType.AUTHOR);

  const { data, isLoading } = useCustomQuery({
    queryKey: ["GET /books", search, filter],
    queryFn: () =>
      MockService.getBooks({
        filterType: filter,
        search,
      }),
  });

  const handleSearchChange = debounce((value: string) => {
    setSearch(value);
  }, 300);

  const handleFiltersChange = (tab: TabType<FilterType>) => {
    if (!tab.data) return;
    setFilter(tab.data);
  };

  return (
    <>
      <LibraryFilters
        onSearchChange={(event) => handleSearchChange(event.target.value)}
        onTabChange={handleFiltersChange}
        isLoading={isLoading}
      />
      <div className="gap-md relative flex flex-col">
        <AnimatePresence>
          {isLoading ? (
            <Loading />
          ) : (
            data?.books?.map((book) => (
              <BookCard
                key={`book-${book.id}`}
                title={book.title}
                translations={book.translations}
                author={book.author}
              />
            ))
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

const Loading: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute flex min-h-[500px] w-full items-center justify-center"
    >
      <Loader size="large" />
    </motion.div>
  );
};

type LibraryFiltersProps = {
  onSearchChange?: ChangeEventHandler<HTMLInputElement>;
  onTabChange?: TabsProps<FilterType>["onChange"];
  isLoading?: boolean;
};
const LibraryFilters: FC<LibraryFiltersProps> = (props) => {
  return (
    <section className="gap-xl flex items-center">
      <Search
        onChange={props.onSearchChange}
        label="Поиск книги"
        placeholder="Название книги"
        className="w-[350px]"
      />
      <Tabs
        id="LibraryFilters"
        label="Сортировка"
        className={cn("max-w-[473px]", props.isLoading && "pointer-events-none opacity-50")}
        onChange={props.onTabChange}
        tabs={[
          { id: 1, label: "По автору", data: FilterType.AUTHOR },
          { id: 2, label: "По книге", data: FilterType.TITLE },
          { id: 3, label: "По дате", data: FilterType.DATE },
        ]}
      />
    </section>
  );
};

const MotionCard = motion.create(Card);
type BookCardProps = {
  title: string;
  author: Author;
  translations: BookWithoutPages["translations"];
};
const BookCard: FC<BookCardProps> = (props) => {
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
          />
        ))}
      </div>
    </MotionCard>
  );
};

type BookTranslationCardProps = { translation: Omit<Translation, "pages"> };
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
