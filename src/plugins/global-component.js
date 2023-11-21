import VueSweetalert2 from 'vue-sweetalert2';
import {
  Field as VeeField,
  Form as VeeForm,
  ErrorMessage as VeeErrorMessage
} from 'vee-validate';

export default {
  install(app) {
    app.component('VueSweetalert2', VueSweetalert2);
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('VeeErrorMessage', VeeErrorMessage);
  }
}