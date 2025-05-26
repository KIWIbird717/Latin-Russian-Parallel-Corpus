import { http, HttpResponse } from "msw";
import {
  Author,
  BookWork,
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
  Word,
  CorpusSearchTextResult,
  Statistics,
  Book,
  TranslationLocale,
  FilterType,
} from "./types";
import { faker } from "@faker-js/faker";
import { capitalize } from "@/shared/utils/capitalize";
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

const BOOKS: Book[] = Array.from({ length: 100 }).map(() => generateBook());

export const handlers = [
  http.get("/authors", () => {
    const authors: Author[] = Array.from({ length: 100 }).map(() => ({
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      dateOfBirth: faker.date.birthdate(),
    }));
    return HttpResponse.json({ authors });
  }),

  http.get("/book-works", () => {
    const bookWorks: BookWork[] = Array.from({ length: 50 }).map(() => ({
      id: faker.string.uuid(),
      title: capitalize(faker.lorem.words(3)),
      description: faker.lorem.paragraph(),
      author: {
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        dateOfBirth: faker.date.birthdate(),
      },
      createdAt: faker.date.past(),
    }));
    return HttpResponse.json({ bookWorks });
  }),

  http.get("/morphologic-filters", () => {
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
    return HttpResponse.json({ filters });
  }),
  http.get("/corpus-search", async () => {
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

    return HttpResponse.json({ results });
  }),

  http.get("/info-stats", async () => {
    await sleep(1000);

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
    return HttpResponse.json({ data: data });
  }),

  http.get("/books", async ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page")) || 1;
    const limit = Number(url.searchParams.get("limit")) || 10;
    const search = url.searchParams.get("search") || "";
    const startDate = url.searchParams.get("startDate");
    const endDate = url.searchParams.get("endDate");
    const filterType = (url.searchParams.get("filterType") as FilterType) || FilterType.TITLE;

    await sleep(1000);

    let filteredBooks = [...BOOKS];

    if (search) {
      filteredBooks = filteredBooks.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (filterType === FilterType.AUTHOR) {
      filteredBooks.sort((a, b) =>
        `${a.author.firstName} ${a.author.lastName}`.localeCompare(
          `${b.author.firstName} ${b.author.lastName}`,
        ),
      );
    } else if (filterType === FilterType.TITLE) {
      filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
    } else if (filterType === FilterType.DATE && startDate && endDate) {
      filteredBooks = filteredBooks.filter(
        (book) =>
          new Date(book.date) >= new Date(startDate) && new Date(book.date) <= new Date(endDate),
      );
      filteredBooks.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    const total = filteredBooks.length;
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedBooks = filteredBooks.slice(start, end);

    return HttpResponse.json({
      books: paginatedBooks.map((book) => ({
        ...book,
        translations: book.translations.map((translation) => ({
          ...translation,
          pages: undefined,
        })),
      })),
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  }),
];
