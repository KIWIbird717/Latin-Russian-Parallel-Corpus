"use client";

import { MockService } from "@/shared/services/mock";
import { ComboBox } from "@/shared/ui/intent/ui/combo-box";
import { Typography } from "@/shared/ui/Typography";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { useRouter } from "@/shared/i18n/navigation";
import { Button } from "@/shared/ui/Button";
import { Skeleton } from "@/shared/ui/Skeleton";

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
    </section>
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
        <Typography.Small>{props.description}</Typography.Small>
      </div>

      <div className="gap-sm flex items-center">
        <ComboBox defaultInputValue="">
          <ComboBox.Input />
          <ComboBox.List items={[{ id: 1, locale: "russian", label: "Latin-Russian" }]}>
            {(item) => (
              <ComboBox.Option id={item.id} textValue={item.label}>
                {item.label}
              </ComboBox.Option>
            )}
          </ComboBox.List>
        </ComboBox>
      </div>
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
