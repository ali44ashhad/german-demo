// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// adjust import paths if your locales live elsewhere
import en from '../public/locales/en/common.json';
import it from '../public/locales/it/common.json';
import es from '../public/locales/es/common.json';
import de from '../public/locales/de/common.json';
import zh from '../public/locales/zh-CN/common.json';
import fr from '../public/locales/fr/common.json';

const resources = {
  en: { common: en },
  it: { common: it },
  es: { common: es },
  de: { common: de },
  'zh-CN': { common: zh },
  fr: { common: fr }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    ns: ['common'],
    defaultNS: 'common',
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    react: { useSuspense: false }
  });

export default i18n;
