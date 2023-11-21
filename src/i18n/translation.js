import i18n from "@/i18n";
import { nextTick } from "vue";

const supportedLocales = ['en','es'];

const translation = {
  get defaultLocale() {
    return import.meta.env.VITE_i18N_DEFAULT_LOCALE;
  },
  get supportedLocales() {
    return supportedLocales;
  },
  get currentLocale() {
    return i18n.global.locale.value;
  },
  set currentLocale(newLocale) {
    i18n.global.locale.value = newLocale;
  },
  async switchLanguage(newLocale) {
    await translation.loadLocaleMessages(newLocale);
    translation.currentLocale = newLocale;
    document.querySelector("html").setAttribute("lang", newLocale);
    localStorage.setItem("user-locale", newLocale);
  },
  async loadLocaleMessages(locale) {
    if(!i18n.global.availableLocales.includes(locale)) {
      const messages = await import(`@/i18n/locales/${locale}.json`);
      i18n.global.setLocaleMessage(locale, messages.default);
    }
    return await nextTick();
  },
  isLocaleSupported(locale) {
    return translation.supportedLocales.includes(locale);
  },
  getUserLocale() {
    const locale = window.navigator.language ||
      window.navigator.userLanguage ||
      translation.defaultLocale;

    return {
      locale: locale,
      localeNoRegion: locale.split('-')[0]
    };
  },
  getPersistedLocale() {
    const persistedLocale = localStorage.getItem("user-locale");

    return translation.isLocaleSupported(persistedLocale)
      ? persistedLocale
      : null;
  },
  guessDefaultLocale() {
    const userPersistedLocale = translation.getPersistedLocale();
    
    if(userPersistedLocale) {
      return userPersistedLocale
    }
    const userPreferredLocale = translation.getUserLocale();
    if (translation.isLocaleSupported(userPreferredLocale.locale)) {
      return userPreferredLocale.locale;
    }
    if (translation.isLocaleSupported(userPreferredLocale.localeNoRegion)) {
      return userPreferredLocale.localeNoRegion;
    }
    
    return translation.defaultLocale;
  },
  async routeMiddleware(to, _from, next) {
    const paramLocale = to.params.locale;

    if(!translation.isLocaleSupported(paramLocale)) {
      return next(translation.guessDefaultLocale());
    }

    await translation.switchLanguage(paramLocale);

    return next();
  },
  i18nRoute(to) {
    return {
      ...to,
      params: {
        locale: translation.currentLocale,
        ...to.params
      },
    };
  }
}

export default translation;