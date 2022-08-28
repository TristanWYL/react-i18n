import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { loadLocale, Locale } from "./locales";

export const setupI18n = () => {
  const defaultLocale = "en";
  i18next.use(initReactI18next).use(LanguageDetector).init({
    fallbackLng: defaultLocale,
  });
  loadAndChange(defaultLocale);
};

export const loadAndChange = (locale: string) => {
  loadLocale(locale as Locale).then(() => i18next.changeLanguage(locale));
};
