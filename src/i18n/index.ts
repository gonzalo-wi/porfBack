import { createI18n } from 'vue-i18n'
import en from './en'
import es from './es'

export type MessageSchema = typeof en

const i18n = createI18n<[MessageSchema], 'en' | 'es'>({
  legacy: false,
  locale: typeof window !== 'undefined' ? localStorage.getItem('language') || 'en' : 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    es,
  },
})

export default i18n
