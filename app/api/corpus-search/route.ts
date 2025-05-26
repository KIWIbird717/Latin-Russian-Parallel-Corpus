import { CorpusSearchTextResult, Word, ParsOrationis } from "@/shared/lib/msw/handlers/types";
import { faker } from "@faker-js/faker";
import { NextResponse } from "next/server";
import { sleep } from "@/shared/utils/sleep";
import { possibility } from "@/shared/utils/possibility";

const LATIN_WORDS = [
  "Sed",
  "ut",
  "perspiciatis",
  "unde",
  "omnis",
  "iste",
  "natus",
  "error",
  "sit",
  "voluptatem",
  "accusantium",
  "doloremque",
  "laudantium,",
  "totam",
  "rem",
  "aperiam",
  "eaque",
  "ipsa,",
  "quae",
  "ab",
  "illo",
  "inventore",
  "veritatis",
  "et",
  "quasi",
  "architecto",
  "beatae",
  "vitae",
  "dicta",
  "sunt,",
  "explicabo.",
  "Nemo",
  "enim",
  "ipsam",
  "voluptatem,",
  "quia",
  "voluptas",
  "sit,",
  "aspernatur",
  "aut",
  "odit",
  "aut",
  "fugit,",
  "sed",
  "quia",
  "consequuntur",
  "magni",
  "dolores",
  "eos,",
  "qui",
  "ratione",
  "voluptatem",
  "sequi",
  "nesciunt,",
  "neque",
  "porro",
  "quisquam",
  "est,",
  "qui",
  "dolorem",
  "ipsum,",
  "quia",
  "dolor",
  "sit,",
  "amet,",
  "consectetur,",
  "adipisci oportet,",
  "sed",
  "quia",
  "non",
  "numquam",
  "eius",
  "modi",
  "tempora",
  "incidunt,",
  "ut",
  "labore",
  "et",
  "dolore",
  "magnam",
  "aliquam",
  "quaerat",
  "voluptatem.",
];

const generateWord = (isSearchWord: boolean = false): Word | string => {
  const word = isSearchWord ? "audio" : faker.helpers.arrayElement(LATIN_WORDS);

  if (possibility(0.3) && !isSearchWord) {
    return word;
  }

  return {
    id: faker.string.uuid(),
    value: word,
    description: faker.lorem.sentence(),
    note: possibility(0.5) ? faker.lorem.sentence() : undefined,
    properties: [
      {
        id: 1,
        label: "Lemma",
        value: word,
      },
      {
        id: 2,
        label: "Pars Orationis",
        value: faker.helpers.arrayElement(Object.values(ParsOrationis)),
      },
      {
        id: 3,
        label: "Forma",
        value: faker.helpers.arrayElement(Object.values(ParsOrationis)),
      },
      {
        id: 4,
        label: "Genus verbi",
        value: faker.helpers.arrayElement(Object.values(ParsOrationis)),
      },
      {
        id: 5,
        label: "Tempus",
        value: faker.helpers.arrayElement(Object.values(ParsOrationis)),
      },
    ],
  };
};

const results: CorpusSearchTextResult[] = await Promise.all(
  Array.from({ length: 5 }).map(async () => {
    const wordsCount = faker.number.int({ min: 30, max: 50 });
    const searchWordIndex = faker.number.int({ min: 0, max: wordsCount - 1 });

    const text = Array.from({ length: wordsCount }).map((_, index) =>
      generateWord(index === searchWordIndex),
    );
    await sleep(2000);
    return {
      searchedWord: "audio",
      author: `${faker.person.firstName()} ${faker.person.lastName()}`,
      source: faker.lorem.words(3),
      sourceId: faker.string.uuid(),
      page: faker.number.int({ min: 1, max: 500 }),
      line: faker.number.int({ min: 1, max: 50 }),
      text,
    };
  }),
);

export async function GET() {
  return NextResponse.json({ results });
}
