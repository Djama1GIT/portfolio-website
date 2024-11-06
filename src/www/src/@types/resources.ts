import ENTranslation from '../i18n/en/translation.json';
import RUTranslation from '../i18n/ru/translation.json';
import KUMTranslation from '../i18n/kum/translation.json';
import ARTranslation from '../i18n/ar/translation.json';

const resources = {
  ENTranslation,
  RUTranslation,
  KUMTranslation,
  ARTranslation,
} as const;

console.log(resources);

export default resources;