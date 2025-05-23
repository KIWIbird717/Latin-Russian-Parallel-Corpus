"use client";

import { Disclosure } from "@/shared/ui/Disclosure";
import { Input } from "@/shared/ui/Input";
import { Slider } from "@/shared/ui/intent/ui/slider";
import { useTranslations } from "next-intl";
import { FC, useState } from "react";

export const CoreferencesFilters: FC = () => {
  const t = useTranslations("Filters.coreferences");
  const [windowSize, setWindowSize] = useState<number>(0);

  return (
    <Disclosure label="Поиск кореферентностей">
      <Input placeholder="Введите первое слово" label="Первое слово" />
      <Input placeholder="Введите второе слово" label="Второе слово" />
      <div className="px-[8px]">
        <Slider
          label="Размер окна"
          value={windowSize}
          onChange={(value) => setWindowSize(Array.isArray(value) ? value[0] : value)}
          postfix={t("wordCount", { count: windowSize })}
        />
      </div>
    </Disclosure>
  );
};
