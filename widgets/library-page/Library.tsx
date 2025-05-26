"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { FilterType, BookWithoutPages } from "@/shared/lib/msw/handlers/types";
import { MockService } from "@/shared/services/mock";
import { TabType } from "@/shared/ui/Tabs";
import { FC, useState } from "react";
import debounce from "lodash.debounce";
import { AnimatePresence } from "motion/react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loading } from "./components/Loading";
import { LibraryFilters } from "./components/LibraryFilters";
import { BookCard } from "./components/BookCard";
import { Loader } from "@/shared/ui/Loader";

type BooksResponse = {
  books: BookWithoutPages[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
};

export const Library: FC = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(FilterType.AUTHOR);

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery<BooksResponse>({
    queryKey: ["GET /books", search, filter],
    queryFn: ({ pageParam = 1 }) =>
      MockService.getBooks({
        filterType: filter,
        search,
        page: pageParam as number,
        limit: 10,
      }),
    getNextPageParam: (lastPage) => {
      if (lastPage.pagination.page < lastPage.pagination.totalPages) {
        return lastPage.pagination.page + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
  });

  const handleSearchChange = debounce((value: string) => {
    setSearch(value);
  }, 300);

  const handleFiltersChange = (tab: TabType<FilterType>) => {
    if (!tab.data) return;
    setFilter(tab.data);
  };

  const books = data?.pages.flatMap((page) => page.books) ?? [];

  return (
    <>
      <LibraryFilters
        onSearchChange={(event) => handleSearchChange(event.target.value)}
        onTabChange={handleFiltersChange}
        isLoading={isLoading}
      />
      <div className="gap-md relative flex flex-col">
        <AnimatePresence>
          {isLoading && !data ? (
            <Loading />
          ) : (
            <InfiniteScroll
              dataLength={books.length}
              next={fetchNextPage}
              hasMore={hasNextPage}
              loader={<InfiniteScrollLoader />}
              scrollThreshold={0.8}
              className="gap-md flex flex-col"
            >
              {books.map((book) => (
                <BookCard
                  key={`book-${book.id}`}
                  title={book.title}
                  translations={book.translations}
                  author={book.author}
                />
              ))}
            </InfiniteScroll>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

const InfiniteScrollLoader: FC = () => {
  return (
    <div className="flex w-full justify-center">
      <Loader size="large" />
    </div>
  );
};
