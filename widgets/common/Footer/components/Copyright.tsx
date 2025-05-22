import { Typography } from "@/shared/ui/Typography";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const Copyright: FC = () => {
  const t = useTranslations("Footer");

  return (
    <div className="flex w-full items-center justify-center text-center">
      <Typography.Small className="text-text-200 max-w-[250px]">
        {t("copyright")}{" "}
        <a href="https://github.com/KIWIbird717" target="_blank" className="underline">
          @KIWIbird717
        </a>
      </Typography.Small>
    </div>
  );
};
