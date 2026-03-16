'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { translations, TranslationKey, Language } from '@/lib/translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

// Custom hook to get initial language from localStorage
function useInitialLanguage(): [Language, (lang: Language) => void] {
  // Initialize state with a function that reads from localStorage
  const [lang, setLangState] = useState<Language>(() => {
    // Default to 'es' on server
    if (typeof window === 'undefined') {
      return 'es';
    }
    // On client, try to read from localStorage
    const savedLang = localStorage.getItem('haztuweb-lang') as Language | null;
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      return savedLang;
    }
    return 'es';
  });

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('haztuweb-lang', newLang);
    }
  }, []);

  return [lang, setLang];
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [lang, setLang] = useInitialLanguage();

  const t = useCallback((key: TranslationKey): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation not found for key: ${key}`);
      return key;
    }
    return translation[lang] || translation['es'];
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
