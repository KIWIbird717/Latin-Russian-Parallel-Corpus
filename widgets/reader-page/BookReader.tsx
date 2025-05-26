"use client";

import { MockService } from "@/shared/services/mock";
import { useQuery } from "@tanstack/react-query";
import { FC, useState } from "react";
import { Skeleton } from "@/shared/ui/Skeleton";
import { NoSuchBook } from "./components/NoSuchBook";
import { Title } from "./components/Title";
import { TranslationsReader, View } from "./components/TranslationsReader";

type BookReaderProps = {
  bookId: string;
};

export const BookReader: FC<BookReaderProps> = (props) => {
  const [view, setView] = useState(View.HORIZONTAL);
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
      <Title
        onToggle={(isToggled) => setView(isToggled ? View.HORIZONTAL : View.VERTICAL)}
        title={data?.book.title}
        description={data?.book.title}
      />
      <TranslationsReader view={view} translations={data.book.translations} />
    </section>
  );
};
