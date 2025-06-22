'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from '../Contexte/TranslationContext';

type TranslatedTextProps = {
  text: string;
  format?: 'text' | 'html';
};

export default function TranslatedText({ text, format = 'text' }: TranslatedTextProps) {
  const { translate } = useTranslation();
  const [translatedText, setTranslatedText] = useState(text);

  useEffect(() => {
    let isMounted = true;

    async function fetchTranslation() {
      const result = await translate(text, format);
      if (isMounted) {
        setTranslatedText(result);
      }
    }

    fetchTranslation();

    return () => {
      isMounted = false;
    };
  }, [text, format]);

  // Si c’est du HTML, on utilise dangerouslySetInnerHTML
  if (format === 'html') {
    return (
      <div
        className="mb-2"
        dangerouslySetInnerHTML={{ __html: translatedText }}
      />
    );
  }

  return <>{translatedText}</>;
}