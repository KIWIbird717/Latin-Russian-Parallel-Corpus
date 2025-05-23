import { http, HttpResponse } from "msw";
import { Author, BookWork } from "./types";
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
];
