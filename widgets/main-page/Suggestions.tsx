import { ArrowLink } from "@/shared/ui/ArrowLink";
import { Card } from "@/shared/ui/Card";
import { Typography } from "@/shared/ui/Typography";
import { useTranslations } from "next-intl";
import { FC, useMemo } from "react";

type SuggestionType = {
  id: number;
  title: string;
  description: string;
  linkTitle: string;
  href: string;
};

export const Suggestions: FC = () => {
  const t = useTranslations("Main.suggestions");

  const suggestions = useMemo<SuggestionType[]>(
    () => [
      {
        id: 1,
        title: t("1.title"),
        description: t("1.description"),
        linkTitle: t("1.link-title"),
        href: "",
      },
      {
        id: 2,
        title: t("2.title"),
        description: t("2.description"),
        linkTitle: t("2.link-title"),
        href: "",
      },
      {
        id: 3,
        title: t("3.title"),
        description: t("3.description"),
        linkTitle: t("3.link-title"),
        href: "",
      },
    ],
    [],
  );

  return (
    <div className="gap-md flex">
      {suggestions.map(({ id, ...suggestion }) => (
        <SuggestionCard key={`suggestion-card-${id}`} {...suggestion} />
      ))}
    </div>
  );
};

type SuggestionCardProps = Omit<SuggestionType, "id">;
const SuggestionCard: FC<SuggestionCardProps> = (props) => {
  return (
    <Card className="!p-lg bg-accent-100 w-full justify-between">
      <div className="gap-lg flex flex-col">
        <Typography.Heading4>{props.linkTitle}</Typography.Heading4>
        <Typography.Body>{props.description}</Typography.Body>
      </div>
      <ArrowLink href={props.href}>{props.linkTitle}</ArrowLink>
    </Card>
  );
};
