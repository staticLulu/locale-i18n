import { LocalePrefix } from "next-intl/routing";

export const locales = ["en", "km"] as const;

export const localPrefix: LocalePrefix = {
  mode: "always",
  prefixes: {
    en: "",
    km: "/km",
  },
} satisfies LocalePrefix<typeof locales>;
