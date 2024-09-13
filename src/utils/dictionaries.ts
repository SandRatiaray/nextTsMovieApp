import { Locale } from './i18n-config';

const dictionaries = {
  en: () => import('../dictionnaries/en.json').then((module) => module.default),
  fr: () => import('../dictionnaries/fr.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();
