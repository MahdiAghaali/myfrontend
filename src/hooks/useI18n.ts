import translations from '../locales.json';

type SupportedLanguage = 'en' | 'de'; // extend this as needed
const userLanguage: SupportedLanguage = 'en'; // Hardcoded for now

export function useI18n() {
  const t = (key: keyof typeof translations['en']) => {
    return translations[userLanguage][key] || key;
  };

  return { t };
}
