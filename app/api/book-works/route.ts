import { BookWork } from "@/shared/types/mock";
import { faker } from "@faker-js/faker";
import { NextResponse } from "next/server";
import { capitalize } from "@/shared/utils/capitalize";

export async function GET() {
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

  return NextResponse.json({ bookWorks });
}
