/**
 * Sleep for a given amount of time
 * @param time - The time to sleep in milliseconds
 */
export function sleep(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
