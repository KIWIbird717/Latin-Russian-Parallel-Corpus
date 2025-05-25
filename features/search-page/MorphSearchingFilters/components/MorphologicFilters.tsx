"use client";

import { MockService } from "@/shared/services/mock";
import { Disclosure } from "@/shared/ui/Disclosure";
import { MultipleSelect } from "@/shared/ui/intent/ui/multiple-select";
import { Checkbox } from "@/shared/ui/Chekbox";
import { FC, useState } from "react";
import { Typography } from "@/shared/ui/Typography";
import { capitalize } from "@/shared/utils/capitalize";
import { useTranslations } from "next-intl";
import { useCustomQuery } from "@/shared/hooks/use-query";
import toast from "react-hot-toast";

const MULTIPLE_SELECT_THRESHOLD = 4;

export const MorphologicFilters: FC = () => {
  const t = useTranslations("Filters.morphologic");

  const { data: filtersData, isLoading } = useCustomQuery({
    queryKey: ["GET /morphologic-filters"],
    queryFn: MockService.getMorphologicFilters,
    onError: () => {
      toast.error(t("morph-filters-error"));
    },
  });

  const [selectedValues, setSelectedValues] = useState<Record<string, Set<string>>>({});

  const renderFilterOptions = (key: string, values: string[]) => {
    if (values.length > MULTIPLE_SELECT_THRESHOLD) {
      return (
        <MultipleSelect
          key={key}
          label={key}
          placeholder={`Выберите ${key.toLowerCase()}`}
          items={values.map((value) => ({ id: value, textValue: value }))}
        />
      );
    }

    return (
      <div key={key} className="flex flex-col gap-2">
        <Typography.Small>{key}</Typography.Small>
        <div className="grid grid-cols-2 gap-1">
          {values.map((value) => (
            <Checkbox
              key={value}
              isSelected={selectedValues[key]?.has(value)}
              onChange={(isSelected) => {
                setSelectedValues((prev) => {
                  const current = prev[key] || new Set();
                  if (isSelected) {
                    current.add(value);
                  } else {
                    current.delete(value);
                  }
                  return { ...prev, [key]: current };
                });
              }}
            >
              {capitalize(value)}
            </Checkbox>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Disclosure label={t("morfologicheskie-filtry")} disabled={isLoading}>
      {filtersData?.filters && (
        <div className="gap-md flex flex-col">
          {renderFilterOptions("Pars Orationis", filtersData.filters.parsOrationis)}
          {renderFilterOptions("Tempus", filtersData.filters.tempus)}
          {renderFilterOptions("Modus", filtersData.filters.modus)}
          {renderFilterOptions("Causus", filtersData.filters.causus)}
          {renderFilterOptions("Genus Nominis", filtersData.filters.genusNominis)}
          {renderFilterOptions("Numerus", filtersData.filters.numerus)}
          {renderFilterOptions("Gradus", filtersData.filters.gradus)}
          {renderFilterOptions("Genus Verbi", filtersData.filters.genusVerbi)}
          {renderFilterOptions("Persona", filtersData.filters.persona)}
        </div>
      )}
    </Disclosure>
  );
};
