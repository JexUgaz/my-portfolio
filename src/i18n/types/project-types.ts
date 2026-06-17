import type { KeysMatchingPattern } from "@/i18n/types/helper-types";
import type { DefaultLocale, TranslationMap } from "@/i18n/types";

export type ProjectSectionTranslationKey = KeysMatchingPattern<keyof TranslationMap[DefaultLocale], `projects.${string}.section.${string}`>;
export type ProjectSectionTranslationValue = TranslationMap[DefaultLocale][ProjectSectionTranslationKey];
