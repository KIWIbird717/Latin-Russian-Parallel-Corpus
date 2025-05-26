import { Typography } from "@/shared/ui/Typography";
import { useTranslations } from "next-intl";
import { FC, useMemo } from "react";
import ExtraLink from "@/public/svg/external-link.svg";

export const Resources: FC = () => {
  const t = useTranslations("Footer");
  const resources = useMemo(
    () => [
      { id: 1, title: t("institut-lingv-issledovanii"), href: "https://iling.spb.ru" },
      { id: 2, title: t("phi-latin-texts"), href: "https://clr.iling.spb.ru" },
      {
        id: 3,
        title: t("lingvisticheskaya-laboratoriya"),
        href: "https://yandex.ru/maps/-/CHCSrT~K",
      },
      { id: 4, title: t("obratnaya-svyaz"), href: "mailto:iliran@mail.ru" },
    ],
    [t],
  );

  return (
    <div className="gap-md flex flex-col">
      <Typography.Body weight="bold">{t("resources-title")}</Typography.Body>
      <div className="gap-sm flex flex-col">
        {resources.map((item) => (
          <a
            className="gap-sm group flex items-center"
            key={`footer-resourses-item-${item.id}`}
            href={item.href}
            target="_blank"
          >
            <Typography.Small>{item.title} </Typography.Small>
            <ExtraLink className="transition-all duration-100 ease-out group-hover:translate-x-[3px] group-hover:translate-y-[-3px]" />
          </a>
        ))}
      </div>
    </div>
  );
};
