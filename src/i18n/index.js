import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import es from "./locales/es.json";

export default createI18n({
  legacy: false,
  allowComposition: true,
  globalInjection: true,
  runtimeOnly: false,
  locale: import.meta.env.VITE_i18N_DEFAULT_LOCALE || 'es',
  fallbackLocale: import.meta.env.VITE_i18N_FALLBACK_LOCALE || 'es',
  messages: { en, es },
});