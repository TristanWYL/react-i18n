import i18n from "i18next";
export enum Locale {
  en = "en",
  fr = "fr",
}

const loading: Record<Locale, boolean> = { en: false, fr: false };
const loaded: Record<Locale, boolean> = { en: false, fr: false };

export const loadLocale = (locale: Locale) => {
  // avoid re-loading the translations
  if (loaded[locale] || loading[locale]) return Promise.resolve();
  loading[locale] = true;
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
    })
    .finally(() => {
      loading[locale] = false;
    });
};

export const defaultLocale: Locale = Locale.en;
// Assume the url has the form of {protocol}://{domain name}/{locale}
export const getLocaleFromUrl = () => {
  const locale = document.location.href.split("/")[3];
  if (Object.keys(Locale).includes(locale)) {
    return locale;
  } else {
    return defaultLocale;
  }
};

export const setLocaleInUrl = (locale: string) => {
  const urlComponents = document.location.href.split("/");
  urlComponents[3] = locale;
  document.location.replace(urlComponents.join("/"));
};
