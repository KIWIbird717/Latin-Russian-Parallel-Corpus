import { sleep } from "@/shared/utils/sleep";
import { books } from "../route";
import { NextResponse } from "next/server";
import { NextApiRequest } from "next";

export async function GET(_: NextApiRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  await sleep(300);

  const book = books.find((book) => book.id === id);
  console.log(books.map((book) => book.id));

  if (!book) {
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.json({ book });
}
