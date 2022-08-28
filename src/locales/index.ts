import i18n from "i18next";
export enum Locale {
  en = "en",
  fr = "fr",
}

const loaded: Record<Locale, boolean> = { en: false, fr: false };

export const loadLocale = (locale: Locale) => {
  // avoid re-loading the translations
  if (loaded[locale]) return Promise.resolve();
  return import(`./${locale}.json`)
    .then((translation) => {
      Object.keys(translation).forEach((ns) =>
        i18n.addResourceBundle(locale, ns, translation[ns])
      );
      loaded[locale] = true;
    })
    .catch((e) => {
      loaded[locale] = false;
      console.error(e);
    });
};
