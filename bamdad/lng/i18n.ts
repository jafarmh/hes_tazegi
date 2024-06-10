import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationAr from "./ar/translation.json";
import translationEN from "./en/translation.json";
import translationFa from "./fa/translation.json";

// Importing translation files






//Creating object with the variables of imported translation files
const resources = {
  fa: {
    translation: translationFa,
  },
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAr,
  },
};

//i18N Initialization

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng:"fa", //default language
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;