import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import ENTranslation from './en/translation.json';
import RUTranslation from './ru/translation.json';
import KUMTranslation from './kum/translation.json';
import ARTranslation from './ar/translation.json';

i18next
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
  debug: true,
  resources: {
    en: {
      translation: ENTranslation,
    },
    ru: {
      translation: RUTranslation,
    },
    kum: {
      translation: KUMTranslation,
    },
    ar: {
      translation: ARTranslation,
    },
  },
  // if you see an error like: "Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type xyz"
  // set returnNull to false (and also in the i18next.d.ts options)
  // returnNull: false,
});