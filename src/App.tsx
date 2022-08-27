import "./App.css";
import { useTranslation } from "react-i18next";

const lngOptions: Record<string, Record<"label", string>> = {
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
          onClick={() => i18n.changeLanguage(lng)}
          disabled={i18n.resolvedLanguage === lng}
        >
          {lngOptions[lng].label}
        </button>
      ))}
    </div>
  );
}

export default App;
