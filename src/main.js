import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import i18n from './i18n';

import globalComponent from '@/plugins/global-component.js';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/main.css';
import 'sweetalert2/dist/sweetalert2.min.css';

const pinia = createPinia();
const app = createApp(App);

app.use(router)
  .use(pinia)
  .use(i18n)
  .use(globalComponent)
  .mount('#app');
