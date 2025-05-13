import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["ru"],

  // Used when no locale matches
  defaultLocale: "ru",
});

export type Locale = (typeof routing)["locales"][number];
