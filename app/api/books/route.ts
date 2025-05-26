import { FilterType } from "@/shared/types/mock";
import { NextRequest, NextResponse } from "next/server";
import { sleep } from "@/shared/utils/sleep";
import { books } from "./data";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get("page")) || 1;
  const limit = Number(url.searchParams.get("limit")) || 10;
  const search = url.searchParams.get("search") || "";
  const startDate = url.searchParams.get("startDate");
  const endDate = url.searchParams.get("endDate");
  const filterType = (url.searchParams.get("filterType") as FilterType) || FilterType.TITLE;

  await sleep(500);

  let filteredBooks = [...books];

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

  return NextResponse.json({
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
}
