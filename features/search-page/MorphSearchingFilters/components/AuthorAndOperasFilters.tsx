"use client";

import { MockService } from "@/shared/services/mock";
import { Disclosure } from "@/shared/ui/Disclosure";
import { ComboBox } from "@/shared/ui/intent/ui/combo-box";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";

export const AuthorAndOperasFilters: FC = () => {
  const { data: authorsData, isLoading: isAuthorsLoading } = useQuery({
    queryKey: ["GET /authors"],
    queryFn: MockService.getAuthors,
  });

  const { data: workData, isLoading: isWorkLoading } = useQuery({
    queryKey: ["GET /book-works"],
    queryFn: MockService.getBookWorks,
  });

  return (
    <Disclosure label="Авторы и Опреы">
      <ComboBox placeholder="Выберите автора" label="Автор" isDisabled={isAuthorsLoading}>
        <ComboBox.Input />
        <ComboBox.List items={authorsData?.authors}>
          {(item) => (
            <ComboBox.Option id={item.id} textValue={`${item.firstName} ${item.lastName}`}>
              {item.firstName} {item.lastName}
            </ComboBox.Option>
          )}
        </ComboBox.List>
      </ComboBox>

      <ComboBox placeholder="Выберите оперу" label="Оперы" isDisabled={isWorkLoading}>
        <ComboBox.Input />
        <ComboBox.List items={workData?.bookWorks}>
          {(item) => (
            <ComboBox.Option id={item.id} textValue={item.title}>
              {item.title}
            </ComboBox.Option>
          )}
        </ComboBox.List>
      </ComboBox>
    </Disclosure>
  );
};
