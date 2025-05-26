import { Word } from "@/shared/types/mock";

export function isEndOfSentence(token: string | Word) {
  return typeof token === "string" && /[.!?]/.test(token);
}
