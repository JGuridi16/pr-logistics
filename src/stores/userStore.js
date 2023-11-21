import { defineStore } from 'pinia';
import translation from '@/i18n/translation';

export const useUserStore = defineStore('user', {
  state: () => ({
    language: translation.defaultLocale,
  }),
  getters: {
    getLanguage: (state) => state.language,
  },
  actions: {
    setLanguage(newValue) {
      this.language = newValue;
    },
  },
});