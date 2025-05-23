import { ButtonLink } from "@/shared/ui/ButtonLink";
import { Typography } from "@/shared/ui/Typography";
import { useTranslations } from "next-intl";
import { FC } from "react";
import SearchSvg from "@/public/svg/search.svg";
import BookSvg from "@/public/svg/book.svg";
import BlurText from "@/shared/ui/BlurText";

type HeroProps = {
  title: string;
  description: string;
};
export const Hero: FC<HeroProps> = (props) => {
  const t = useTranslations("Main.hero");

  return (
    <div className="gap-xl my-[110px] flex flex-col items-center text-center">
      <div className="gap-md flex flex-col items-center">
        <BlurText
          text={props.title}
          delay={150}
          animateBy="words"
          direction="top"
          className="font-charis-sil mb-8 flex max-w-[800px] items-center justify-center text-center text-[48px]"
        />
        <Typography.Body className="max-w-[680px]">{props.description}</Typography.Body>
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
