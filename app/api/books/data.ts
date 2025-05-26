import {
  BookWithoutPages,
  TranslationLocale,
  Word,
  ParsOrationis,
  Book,
} from "@/shared/types/mock";
import { faker } from "@faker-js/faker";
import { capitalize } from "@/shared/utils/capitalize";
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
  "adipisci oportet,",
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

const generateParagraph = (): (Word | string)[] => {
  const wordsCount = faker.number.int({ min: 30, max: 50 });
  return Array.from({ length: wordsCount }).map(() => generateWord());
};

const generateTranslation = () => ({
  id: faker.string.uuid(),
  title: capitalize(faker.lorem.words(3)),
  description: faker.lorem.paragraph(),
  locale: faker.helpers.arrayElement([TranslationLocale.GREEK, TranslationLocale.RUSSIAN]),
  date: faker.date.past(),
  pages: Array.from({ length: faker.number.int({ min: 5, max: 10 }) }).map(() =>
    generateParagraph(),
  ),
});

const generateBook = (): Book => {
  const author = {
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    dateOfBirth: faker.date.birthdate(),
  };

  const latinTranslation = {
    id: faker.string.uuid(),
    title: capitalize(faker.lorem.words(3)),
    description: faker.lorem.paragraph(),
    locale: TranslationLocale.LATIN,
    date: faker.date.past(),
    pages: Array.from({ length: faker.number.int({ min: 5, max: 10 }) }).map(() =>
      generateParagraph(),
    ),
  };

  return {
    id: faker.string.uuid(),
    author,
    title: capitalize(faker.lorem.words(3)),
    date: faker.date.past(),
    translations: [
      latinTranslation,
      ...Array.from({ length: faker.number.int({ min: 1, max: 2 }) }).map(() =>
        generateTranslation(),
      ),
    ],
  };
};

export const books: BookWithoutPages[] = Array.from({ length: 100 }).map(() => generateBook());
