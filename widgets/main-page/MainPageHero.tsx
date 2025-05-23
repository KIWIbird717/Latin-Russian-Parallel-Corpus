import { useTranslations } from "next-intl";
import { FC } from "react";
import { Hero } from "@/entities/common/Hero";

export const MainPageHero: FC = () => {
  const t = useTranslations("Main.hero");

  return <Hero title={t("title")} description={t("description")} />;
};
