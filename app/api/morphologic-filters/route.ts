import {
  ParsOrationis,
  Tempus,
  Modus,
  Causus,
  GenusNominis,
  Numerus,
  Gradus,
  GenusVerbi,
  Persona,
  MorphologicFilters,
} from "@/shared/types/mock";
import { NextResponse } from "next/server";

export async function GET() {
  const filters: MorphologicFilters = {
    parsOrationis: Object.values(ParsOrationis),
    tempus: Object.values(Tempus),
    modus: Object.values(Modus),
    causus: Object.values(Causus),
    genusNominis: Object.values(GenusNominis),
    numerus: Object.values(Numerus),
    gradus: Object.values(Gradus),
    genusVerbi: Object.values(GenusVerbi),
    persona: Object.values(Persona),
  };

  return NextResponse.json({ filters });
}
