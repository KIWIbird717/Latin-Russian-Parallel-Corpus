import { Layout } from "@/shared/ui/Layout";
import { useTranslations } from "next-intl";
import { FC, useMemo } from "react";

import SearchSvg from "@/public/svg/search.svg";
import BookSvg from "@/public/svg/book.svg";
import BarChartSvg from "@/public/svg/bar-chart.svg";
import InfoSvg from "@/public/svg/info.svg";
import { Link } from "@/shared/i18n/navigation";
import { Typography } from "@/shared/ui/Typography/index";
import { Logo } from "@/entities/common/Logo";

export const Navbar: FC = () => {
  return (
    <nav className="border-border-stroke py-sm bg-background-100 fixed top-0 left-0 w-full border-b">
      <Layout className="flex items-center justify-between">
        <Logo />
        <NavigationItems />
      </Layout>
    </nav>
  );
};

type NavigationItemsProps = {};
const NavigationItems: FC<NavigationItemsProps> = (props) => {
  const t = useTranslations("Navbar");

  const items = useMemo(
    () => [
      { id: 1, label: t("search"), link: "/search", icon: SearchSvg },
      { id: 2, label: t("library"), link: "/library", icon: BookSvg },
      { id: 3, label: t("statistics"), link: "/statistics", icon: BarChartSvg },
      { id: 4, label: t("about"), link: "/about", icon: InfoSvg },
    ],
    [],
  );

  return (
    <div className="gap-lg flex items-center">
      {items.map(({ id, ...item }) => (
        <NavItem key={`navigation-item-${id}`} {...item} />
      ))}
    </div>
  );
};

type NavItemProps = {
  label: string;
  link: string;
  icon: FC;
};
const NavItem: FC<NavItemProps> = (props) => {
  const Icon = props.icon as FC<{ className: string }>;

  return (
    <Link href={props.link} className="group gap-micro flex items-center">
      <Icon className="group-hover:[&_path]:stroke-primary-300 [&_path]:transition-all [&_path]:duration-100" />
      <Typography.Body className="group-hover:text-primary-300 transition-colors duration-100">
        {props.label}
      </Typography.Body>
    </Link>
  );
};
