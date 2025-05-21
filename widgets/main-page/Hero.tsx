import { ButtonLink } from "@/shared/ui/ButtonLink";
import { Typography } from "@/shared/ui/Typography";
import { useTranslations } from "next-intl";
import { FC } from "react";
import SearchSvg from "@/public/svg/search.svg";
import BookSvg from "@/public/svg/book.svg";

export const Hero: FC = () => {
  const t = useTranslations("Main.hero");

  return (
    <div className="gap-xl my-[110px] flex flex-col items-center text-center">
      <div className="gap-md flex flex-col items-center">
        <Typography.Heading1 className="max-w-[800px]">{t("title")}</Typography.Heading1>
        <Typography.Body className="max-w-[680px]">{t("description")}</Typography.Body>
      </div>
      <div className="gap-md flex items-center">
        <ButtonLink href={"/search"}>
          <SearchSvg className="[&_path]:stroke-white" />
          {t("search")}
        </ButtonLink>
        <ButtonLink href={"/library"} variant="secondary">
          <BookSvg />
          {t("smotret-biblioteku")}
        </ButtonLink>
      </div>
    </div>
  );
};
