import { en } from './en';
import { es } from './es';
import { zh } from './zh';

export type Language = 'en' | 'es' | 'zh';

export const translations = {
  en,
  es,
  zh
};

export type TranslationKey = keyof typeof en;