import { FC } from "react";
import { Typography } from "@/shared/ui/Typography";
import { TokensReader } from "@/entities/common/TokensReader";
import { capitalize } from "@/shared/utils/capitalize";
import { Translation } from "@/shared/types/mock";

type LocaleReaderProps = { translation: Translation; page: number };

export const LocaleReader: FC<LocaleReaderProps> = (props) => {
  return (
    <div className="gap-sm flex w-full flex-col">
      <Typography.Body weight="bold" className="ml-micro">
        {capitalize(props.translation.locale)}
      </Typography.Body>
      <TokensReader tokens={props.translation.pages[props.page]} />
    </div>
  );
};
