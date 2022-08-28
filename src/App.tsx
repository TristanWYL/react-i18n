import "./App.css";
import { useTranslation } from "react-i18next";
import { Locale } from "./locales";
import { loadAndChange } from "./i18n";
const lngOptions: Record<Locale, Record<"label", string>> = {
  en: { label: "English" },
  fr: { label: "française" },
};

function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <p>{t("hello")}</p>
      {Object.keys(lngOptions).map((lng) => (
        <button
          key={lng}
          onClick={() => loadAndChange(lng)}
          disabled={i18n.resolvedLanguage === lng}
        >
          {lngOptions[lng as Locale].label}
        </button>
      ))}
    </div>
  );
}

export default App;
