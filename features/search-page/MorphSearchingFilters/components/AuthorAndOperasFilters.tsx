"use client";

import { useCustomQuery } from "@/shared/hooks/use-query";
import { MockService } from "@/shared/services/mock";
import { Disclosure } from "@/shared/ui/Disclosure";
import { ComboBox } from "@/shared/ui/intent/ui/combo-box";
import { useTranslations } from "next-intl";
import { FC } from "react";
import { toast } from "react-hot-toast";

export const AuthorAndOperasFilters: FC = () => {
  const t = useTranslations("Filters.author-and-operas");

  const {
    data: authorsData,
    isLoading: isAuthorsLoading,
    error: authorsError,
  } = useCustomQuery({
    queryKey: ["GET /authors"],
    queryFn: MockService.getAuthors,
    onError: () => {
      toast.error(t("authors-error"));
    },
  });

  const {
    data: workData,
    isLoading: isWorkLoading,
    error: booksError,
  } = useCustomQuery({
    queryKey: ["GET /book-works"],
    queryFn: MockService.getBookWorks,
    onError: () => {
      toast.error(t("books-error"));
    },
  });

  const isDisclosureDisabled =
    isAuthorsLoading || isWorkLoading || Boolean(authorsError) || Boolean(booksError);

  return (
    <Disclosure label={t("avtory-i-oprey")} disabled={isDisclosureDisabled}>
      <ComboBox placeholder={t("vyberite-avtora")} label={t("avtor")} isDisabled={isAuthorsLoading}>
        <ComboBox.Input />
        <ComboBox.List items={authorsData?.authors}>
          {(item) => (
            <ComboBox.Option id={item.id} textValue={`${item.firstName} ${item.lastName}`}>
              {item.firstName} {item.lastName}
            </ComboBox.Option>
          )}
        </ComboBox.List>
      </ComboBox>

      <ComboBox placeholder={t("vyberite-operu")} label={t("opery")} isDisabled={isWorkLoading}>
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
