import type {
  Locale,
  TranslationKey,
  TranslationValue,
  TranslatorFunction,
} from "./types";
import { ui, defaultLang } from "./ui";

export const getLangFromUrl = (url: URL) => {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
};

export const useTranslations = (lang: Locale): TranslatorFunction => {
  return <K extends TranslationKey>(key: K): TranslationValue<K> => {
    const value = (
      ui[lang] as Partial<Record<TranslationKey, TranslationValue<K>>>
    )[key];
    return value ?? ui[defaultLang][key];
  };
};

export const getSkillsCategoryMap = (lang: Locale): Record<string, string> => {
  const entries = Object.entries(ui[lang]).filter(([key]) =>
    key.startsWith("skills.categories.")
  ) as [string, string][];

  return Object.fromEntries(entries);
};
