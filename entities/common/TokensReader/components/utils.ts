import { Word } from "@/shared/lib/msw/handlers/types";

export function isEndOfSentence(token: string | Word) {
  return typeof token === "string" && /[.!?]/.test(token);
}
