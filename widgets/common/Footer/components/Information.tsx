import { Logo } from "@/entities/common/Logo";
import { Typography } from "@/shared/ui/Typography";
import { useTranslations } from "next-intl";
import { FC, useMemo } from "react";
import MailSvg from "@/public/svg/mail.svg";
import TelegramSvg from "@/public/svg/telegram.svg";
import PinSvg from "@/public/svg/map-pin.svg";

export const Information: FC = () => {
  const t = useTranslations("Footer");
  return (
    <div className="gap-md flex w-[550px] flex-col">
      <Logo />
      <Typography.Body className="text-text-200">{t("description")}</Typography.Body>
      <IconLinks />
    </div>
  );
};

const IconLinks: FC = () => {
  const iconLinks = useMemo(
    () => [
      { id: 1, icon: <MailSvg />, href: "mailto:iliran@mail.ru" },
      { id: 2, icon: <TelegramSvg />, href: "mailto:iliran@mail.ru" },
      { id: 3, icon: <PinSvg />, href: "https://yandex.ru/maps/-/CHCSrT~K" },
    ],
    [],
  );

  return (
    <div className="gap-sm flex items-center">
      {iconLinks.map((link) => (
        <a
          key={`icon-link-${link.id}`}
          href={link.href}
          target="_blank"
          className="transition-all duration-100 ease-out hover:translate-y-[-3px]"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};
