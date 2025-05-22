import { Link } from "@/shared/i18n/navigation";
import { Typography } from "@/shared/ui/Typography";
import { useTranslations } from "next-intl";
import { FC, useMemo } from "react";
import ExtraLink from "@/public/svg/external-link.svg";

export const Resources: FC = () => {
  const t = useTranslations("Footer");
  const resources = useMemo(
    () => [
      { id: 1, title: t("institut-lingv-issledovanii"), href: "" },
      { id: 2, title: t("phi-latin-texts"), href: "" },
      { id: 3, title: t("lingvisticheskaya-laboratoriya"), href: "" },
      { id: 4, title: t("obratnaya-svyaz"), href: "" },
    ],
    [],
  );

  return (
    <div className="gap-md flex flex-col">
      <Typography.Body weight="bold">{t("resources-title")}</Typography.Body>
      <div className="gap-sm flex flex-col">
        {resources.map((item) => (
          <Link
            className="gap-sm flex items-center"
            key={`footer-resourses-item-${item.id}`}
            href={item.href}
          >
            {item.title} <ExtraLink />
          </Link>
        ))}
      </div>
    </div>
  );
};
