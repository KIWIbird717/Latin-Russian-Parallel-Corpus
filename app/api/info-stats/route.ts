import { Statistics } from "@/shared/lib/msw/handlers/types";
import { sleep } from "@/shared/utils/sleep";
import { faker } from "@faker-js/faker";
import { NextResponse } from "next/server";

const data: Statistics = {
  totalWordFormation: faker.number.int({ min: 1000, max: 5000 }),
  totalMorphologyForms: faker.number.int({ min: 5000, max: 10000 }),
  wordsWithFormsByLocale: {
    latin: faker.number.int({ min: 1000, max: 3000 }),
    russian: faker.number.int({ min: 1000, max: 3000 }),
    greek: faker.number.int({ min: 500, max: 2000 }),
  },
  morphologiesByLocale: {
    latin: faker.number.int({ min: 2000, max: 5000 }),
    russian: faker.number.int({ min: 2000, max: 5000 }),
    greek: faker.number.int({ min: 1000, max: 3000 }),
  },
  authorsAndTranslations: {
    authors: faker.number.int({ min: 50, max: 200 }),
    translations: faker.number.int({ min: 100, max: 500 }),
    total: faker.number.int({ min: 200, max: 1000 }),
  },
};

export async function GET() {
  await sleep(1000);
  return NextResponse.json({ data: data });
}
