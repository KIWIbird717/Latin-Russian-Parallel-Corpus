"use client";

import { MorphReader } from "@/features/search-page/MorphReader";
import { MorphSearchingFilters } from "@/features/search-page/MorphSearchingFilters";
import { CorpusSearchTextResult } from "@/shared/types/mock";
import { FC, useState } from "react";

export const MorphSearchWidget: FC = () => {
  const [morphResponse, setMorphResponse] = useState<CorpusSearchTextResult[] | null>(null);

  return (
    <section className="gap-md grid grid-cols-3">
      <MorphSearchingFilters className="col-span-1" onMorphResponse={setMorphResponse} />
      <MorphReader className="col-span-2" morphResponse={morphResponse} />
    </section>
  );
};
