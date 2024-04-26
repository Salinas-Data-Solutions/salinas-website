
export const languages = {
    en: 'English',
    de: 'Deutsch',
  };
  
  export const defaultLang = 'en';
  
  export const ui = {
    en: {
      // placeholders
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.twitter': 'Twitter',
    },
    de: {
      // placeholders
      'nav.home': 'Accueil',
      'nav.about': 'À propos',
    },
  } as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}