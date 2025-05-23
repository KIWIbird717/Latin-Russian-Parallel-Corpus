/**
 * Чтобы слово начиналось с большой буквы
 * capitalize("hello");    // "Hello"
 * capitalize("wORLD");    // "World"
 */
export function capitalize(word: string): string {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
