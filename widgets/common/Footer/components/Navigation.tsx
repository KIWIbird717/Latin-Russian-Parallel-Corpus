import { useNavigationItems } from "@/shared/hooks/useNavigationItems";
import { Link } from "@/shared/i18n/navigation";
import { Typography } from "@/shared/ui/Typography";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const Navigation: FC = () => {
  const t = useTranslations("Footer");
  const navigationItems = useNavigationItems();

  return (
    <div className="gap-md flex flex-col">
      <Typography.Body weight="bold">{t("navigation-title")}</Typography.Body>
      <div className="gap-sm flex flex-col">
        {navigationItems.map((item) => (
          <Link key={`footer-nav-item-${item.id}`} href={item.link}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
