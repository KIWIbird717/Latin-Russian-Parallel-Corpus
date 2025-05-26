"use client";

import { useCustomQuery } from "@/shared/hooks/use-query";
import { FilterType } from "@/shared/lib/msw/handlers/types";
import { MockService } from "@/shared/services/mock";
import { TabType } from "@/shared/ui/Tabs";
import { FC, useState } from "react";
import debounce from "lodash.debounce";
import { AnimatePresence } from "motion/react";
import { Loading } from "./components/Loading";
import { LibraryFilters } from "./components/LibraryFilters";
import { BookCard } from "./components/BookCard";

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
