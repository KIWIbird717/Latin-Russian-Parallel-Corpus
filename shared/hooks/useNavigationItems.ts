import { useTranslations } from "next-intl";
import { useMemo } from "react";
import SearchSvg from "@/public/svg/search.svg";
import BookSvg from "@/public/svg/book.svg";
import BarChartSvg from "@/public/svg/bar-chart.svg";
import InfoSvg from "@/public/svg/info.svg";

export const useNavigationItems = () => {
  const t = useTranslations("Navbar");

  const items = useMemo(
    () => [
      { id: 1, label: t("search"), link: "/search", icon: SearchSvg },
      { id: 2, label: t("library"), link: "/library", icon: BookSvg },
      { id: 3, label: t("statistics"), link: "/statistics", icon: BarChartSvg },
      { id: 4, label: t("about"), link: "/about", icon: InfoSvg },
    ],
    [t],
  );

  return items;
};
