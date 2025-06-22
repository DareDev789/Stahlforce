'use client';

import { createContext, useContext } from 'react';
import axios from 'axios';

// const API_URL = "https://libretranslate.com"; // API publique
const API_URL = "https://translate.sendbazar.net";

type TranslationContextType = {
  translate: (text: string, format?: string) => Promise<string>;
};

const TranslationContext = createContext<TranslationContextType | null>(null);

export function TranslationProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  const translate = async (text: string, format: string = 'text') => {
    if (typeof window === 'undefined') return text;
    if (locale === 'en') return text;
    
    const cacheKey = `translation_${locale}_${text}`;

    const cached = localStorage.getItem(cacheKey);
    if (cached) return cached;

    try {
      const response = await axios.post(`${API_URL}/translate`, {
        q: text,
        source: 'en',
        target: locale,
        format,
      });

      const translated = response.data.translatedText;

      localStorage.setItem(cacheKey, translated);
      return translated;
    } catch (error) {
      console.error('❌ Erreur de traduction :', error);
      return text;
    }
  };

  return (
    <TranslationContext.Provider value={{ translate }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation doit être utilisé dans TranslationProvider');
  }
  return context;
}