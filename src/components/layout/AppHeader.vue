<template>
  <nav class="container-fluid navbar navbar-expand-lg navbar-light bg-light shadow-sm py-0">
    <div class="container-fluid">
      <router-link class="navbar-brand rounded py-0" :to="{ name: 'home' }">
        <img :src="appLogo" alt="app-logo" />
      </router-link>
      <button @click="switchLanguage" class="btn language-toggler">
        <img class="language-logo" :src="languageLogo" alt="language-logo">
      </button>
    </div>
  </nav>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import { getStaticImage } from '@/utils/utilities';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/userStore.js';
import { languages } from '@/utils/constants/languages';
import { useI18n } from 'vue-i18n';
import translation from '@/i18n/translation';

const store = useUserStore();
const { t, locale } = useI18n();
const { getLanguage } = storeToRefs(store);

const isSpanishLanguage = computed(() => {
  return getLanguage.value === languages.Spanish;
});

const languageLogo = computed(() => {
  return isSpanishLanguage.value
    ? getStaticImage('assets/images/spain.png')
    : getStaticImage('assets/images/us.png');
});

const appLogo = computed(() => getStaticImage('assets/images/pr-logistics-logo.png'));

const switchLanguage = async () => {
  const newLocale = isSpanishLanguage.value ? languages.English : languages.Spanish;

  await translation.switchLanguage(newLocale);
  store.setLanguage(newLocale);
}

</script>
<style scoped>
.language-logo {
  height: 25px;
  width: 25px;
}
</style>