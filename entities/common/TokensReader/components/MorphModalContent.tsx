import { Word } from "@/shared/lib/msw/handlers/types";
import { Card } from "@/shared/ui/Card";
import { ComponentProps, FC } from "react";
import { Typography } from "@/shared/ui/Typography";
import XSvg from "@/public/svg/x.svg";
import { List } from "@/shared/ui/List";
import { useTranslations } from "next-intl";

type MorphModalContentProps = {
  onClose?: () => void;
  word: Word | null;
};

export const MorphModalContent: FC<MorphModalContentProps> = (props) => {
  const t = useTranslations("MorphModalContent");

  if (!props.word) return null;
  return (
    <Card className="bg-background-100 gap-lg flex max-w-[420px] flex-col">
      {/** heading */}
      <div className="gap-lg flex w-fit items-start">
        <div className="gap-micro flex flex-col">
          <Typography.Body weight="bold">{t("morfologicheskii-analiz")}</Typography.Body>
          <Typography.Small className="text-text-200">{t("word-info")}</Typography.Small>
        </div>
        <CloseButton onClick={props.onClose} />
      </div>

      {/** title & description */}
      <div className="gap-micro flex flex-col text-center">
        <Typography.Heading4 weight="bold">{props.word.value}</Typography.Heading4>
        <Typography.Small className="text-text-200">{props.word.description}</Typography.Small>
      </div>

      {/** properties */}
      <List items={props.word.properties} />

      {/** notes */}
      {props.word.note && (
        <div className="flex flex-col">
          <Typography.Small weight="bold">{t("notes")}</Typography.Small>
          <Typography.Small className="text-text-200">{props.word.note}</Typography.Small>
        </div>
      )}
    </Card>
  );
};

type CloseButtonProps = ComponentProps<"button">;
const CloseButton: FC<CloseButtonProps> = (props) => {
  return (
    <button className="cursor-pointer p-[5px]" onClick={props.onClick}>
      <XSvg />
    </button>
  );
};
