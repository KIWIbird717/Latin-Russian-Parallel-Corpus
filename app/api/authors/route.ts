import { Author } from "@/shared/types/mock";
import { faker } from "@faker-js/faker";
import { NextResponse } from "next/server";

export async function GET() {
  const authors: Author[] = Array.from({ length: 100 }).map(() => ({
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    dateOfBirth: faker.date.birthdate(),
  }));

  return NextResponse.json({ authors });
}
