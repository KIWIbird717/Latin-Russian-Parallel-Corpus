import { sleep } from "@/shared/utils/sleep";
import { books } from "../data";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await sleep(300);

  const book = books.find((book) => book.id === id);

  if (!book) {
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.json({ book });
}
