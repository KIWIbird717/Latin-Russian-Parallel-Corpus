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
} from "./types";
import { faker } from "@faker-js/faker";
import { capitalize } from "@/shared/utils/capitalize";

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
];
