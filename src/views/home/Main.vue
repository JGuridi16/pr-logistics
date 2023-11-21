<template>
  <div class="container-fluid row mx-auto p-0">
    <VeeForm v-slot="{ validate, resetForm, values }" :validation-schema="schema" class="form bg-light row mx-auto px-0 py-3 col-12 col-md-6 offset-md-3 my-3 fs-14 shadow rounded">
      <div class="header mb-4 col-12">
        <h6 class="text-muted">{{ capitalize(t('theInformationProvidedMustBeThatOfTheHolderOrOwnerOfTheCreditCard')) }}.</h6>
      </div>
      <div class="name-input mb-2 col-12 col-md-6">
        <label for="name" class="form-label">{{ capitalize(t('name')) }}:</label>
        <VeeField type="text" class="form-control" id="name" v-model="name" name="name" />
        <VeeErrorMessage v-slot="{ message }" name="name">
          <div class="invalid-message text-danger"><i class="fa fa-info-circle text-danger me-1"></i>{{ capitalize(`${t(message)}.`) }}</div>
        </VeeErrorMessage>
      </div>
      <div class="lastname-input mb-2 col-12 col-md-6">
        <label for="lastname" class="form-label">{{ capitalize(t('lastname')) }}:</label>
        <VeeField type="text" class="form-control" id="lastname" v-model="lastname" name="lastname" />
        <VeeErrorMessage v-slot="{ message }" class="invalid-message text-danger" name="lastname">
          <div class="invalid-message text-danger"><i class="fa fa-info-circle text-danger me-1"></i>{{ capitalize(`${t(message)}.`) }}</div>
        </VeeErrorMessage>
      </div>
      <div class="invoice-number-input mb-2 col-12 col-md-6">
        <label for="invoice-number" class="form-label">{{upperEach(t('invoiceNumber'), upperEachOptions)}}:</label>
        <VeeField type="text" class="form-control" id="invoice-number" v-model="invoiceNumber" name="invoiceNumber" />
        <VeeErrorMessage v-slot="{ message }" class="invalid-message text-danger" name="invoiceNumber">
          <div class="invalid-message text-danger"><i class="fa fa-info-circle text-danger me-1"></i>{{ capitalize(`${t(message)}.`) }}</div>
        </VeeErrorMessage>
      </div>
      <div class="email-input mb-2 col-12 col-md-6">
        <label for="email" class="form-label">{{ capitalize(t('email')) }}:</label>
        <VeeField type="email" class="form-control" id="email" v-model="email" name="email" placeholder="example@gmail.com"/>
        <VeeErrorMessage v-slot="{ message }" class="invalid-message text-danger" name="email">
          <div class="invalid-message text-danger"><i class="fa fa-info-circle text-danger me-1"></i>{{ capitalize(`${t(message)}.`) }}</div>
        </VeeErrorMessage>
      </div>
      <div class="address-input mb-2 col-12 col-md-6">
        <label for="address" class="form-label">{{ capitalize(t('address')) }}:</label>
        <VeeField type="text" class="form-control" id="address" v-model="address" name="address" />
        <VeeErrorMessage v-slot="{ message }" class="invalid-message text-danger" name="address">
          <div class="invalid-message text-danger"><i class="fa fa-info-circle text-danger me-1"></i>{{ capitalize(`${t(message)}.`) }}</div>
        </VeeErrorMessage>
      </div>
      <div class="phone-input mb-2 col-12 col-md-6">
        <label for="phone" class="form-label">{{ capitalize(t('phone')) }}:</label>
        <VeeField max="10" type="phone" class="form-control" id="phone" v-model="phone" name="phone" />
        <VeeErrorMessage v-slot="{ message }" class="invalid-message text-danger" name="phone">
          <div class="invalid-message text-danger"><i class="fa fa-info-circle text-danger me-1"></i>{{ capitalize(`${t(message)}.`) }}</div>
        </VeeErrorMessage>
      </div>
      <div class="zip-area-input mb-2 col-12 col-md-6">
        <label for="zipArea" class="form-label">{{ upperEach(t('zipCode'), upperEachOptions) }}:</label>
        <VeeField type="text" class="form-control" id="zipArea" v-model="zipArea" name="zipArea" />
        <VeeErrorMessage v-slot="{ message }" class="invalid-message text-danger" name="zipArea">
          <div class="invalid-message text-danger"><i class="fa fa-info-circle text-danger me-1"></i>{{ capitalize(`${t(message)}.`) }}</div>
        </VeeErrorMessage>
      </div>
      <div class="credit-card-input mb-2 col-12 col-md-6">
        <label for="credit-card" class="form-label">{{ upperEach(t('creditCard'), upperEachOptions) }}:</label>
        <VeeField v-maska="bindedMask" data-maska="#### #### #### ####" type="text" class="form-control" id="credit-card" v-model="creditCard" name="creditCard" placeholder="#### #### #### ####" />
        <VeeErrorMessage v-slot="{ message }" class="invalid-message text-danger" name="creditCard">
          <div class="invalid-message text-danger"><i class="fa fa-info-circle text-danger me-1"></i>{{ capitalize(`${t(message)}.`) }}</div>
        </VeeErrorMessage>
      </div>
      <div class="expiration-date-input mb-2 col-12 col-md-6">
        <label for="expirationDate" class="form-label">{{ upperEach(t('expirationDate'), upperEachOptions) }}:</label>
        <VeeField type="date" class="form-control" id="expirationDate" v-model="expirationDate" name="expirationDate" />
        <VeeErrorMessage v-slot="{ message }" class="invalid-message text-danger" name="expirationDate">
          <div class="invalid-message text-danger"><i class="fa fa-info-circle text-danger me-1"></i>{{ capitalize(`${t(message)}.`) }}</div>
        </VeeErrorMessage>
      </div>
      <div class="security-code-input mb-2 col-12 col-md-6">
        <label for="securityCode" class="form-label">{{ upperEach(t('securityCode'), upperEachOptions) }}:</label>
        <VeeField type="text" class="form-control" id="securityCode" v-model="securityCode" name="securityCode" />
        <VeeErrorMessage v-slot="{ message }" class="invalid-message text-danger" name="securityCode">
          <div class="invalid-message text-danger"><i class="fa fa-info-circle text-danger me-1"></i>{{ capitalize(`${t(message)}.`) }}</div>
        </VeeErrorMessage>
      </div>
      <div class="amount-input mb-2 col-12 col-md-6">
        <label for="amount" class="form-label">{{ capitalize(t('amount')) }}:</label>
        <VeeField type="number" class="form-control" id="amount" v-model="amount" name="amount" />
        <VeeErrorMessage v-slot="{ message }" class="invalid-message text-danger" name="amount">
          <div class="invalid-message text-danger"><i class="fa fa-info-circle text-danger me-1"></i>{{ capitalize(`${t(message)}.`) }}</div>
        </VeeErrorMessage>
      </div>
      <div class="identification-photo mb-2 col-12 col-md-6">
        <label for="identification-photo" class="form-label">{{ upperEach(t('identificationDocument'), upperEachOptions) }}:</label>
        <VeeField type="file" class="form-control" id="identification-photo" v-model="identificationPhoto"
          name="identificationPhoto" accept="image/*"
        />
        <VeeErrorMessage v-slot="{ message }" class="invalid-message text-danger" name="identificationPhoto">
          <div class="invalid-message text-danger"><i class="fa fa-info-circle text-danger me-1"></i>{{ capitalize(`${t(message)}.`) }}</div>
        </VeeErrorMessage>
      </div>
      <div class="card-info-image mb-2 col-12 col-md-6">
        <label for="card-info-image" class="form-label">{{ upperEach(t('creditCardPicture'), upperEachOptions) }}:</label>
        <VeeField type="file" class="form-control" id="card-info-image" v-model="cardInfoImage"
          name="cardInfoImage" accept="image/*"
        />
        <VeeErrorMessage v-slot="{ message }" class="invalid-message text-danger" name="cardInfoImage">
          <div class="invalid-message text-danger"><i class="fa fa-info-circle text-danger me-1"></i>{{ capitalize(`${t(message)}.`) }}</div>
        </VeeErrorMessage>
      </div>
      <div class="col-12 signature-container mt-3">
        <div class="h5">{{ upperEach(t('signaturePad'), upperEachOptions) }}</div>
        <custom-signature-pad
          ref="signatureRef"
          :key="signatureKey"
          :height="'300px'"
          is-rounded
          is-bordered
        />
        <div class="toolbar d-flex justify-content-end bg-white rounded">
          <button type="button" class="btn btn-outline-secondary" @click="onClear">
            <i class="fas fa-broom" />
            <span class="ms-2">{{ capitalize(t('clear')) }}</span>
          </button>
          <button type="button" class="btn btn-secondary ms-2" @click="onUndo">
            <i class="fas fa-undo" />
            <span class="ms-2">{{ capitalize(t('redo')) }}</span>
          </button>
        </div>
        <p class="invalid-message text-danger" v-if="signatureError"><i class="fa fa-info-circle text-danger me-1"></i>{{ capitalize(`${t(signatureError)}.`) }}</p>
      </div>
      <div class="row mx-auto col-12 mt-3">
        <button
          class="col-12 btn btn-success"
          type="button"
          :disabled="isSubmissionLocked"
          @click="onSubmit({ validate, resetForm, values, setErrors })"
        >
          {{ capitalize(t('save')) }}
        </button>
      </div>
    </VeeForm>
  </div>
</template>
<script setup>
import { CustomSignaturePad } from '@/components/common';
import { vMaska } from 'maska';
import { useI18n } from 'vue-i18n';
import { computed, reactive, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/userStore.js';
import * as Yup from 'yup';
import { saveSignatureData as _saveSignatureData } from '@/services/signature.api.js';
import Swal from 'sweetalert2';
import { capitalize, upperEach } from '@/utils/utilities';
import { languages } from '@/utils/constants/languages';

const store = useUserStore();
const { getLanguage } = storeToRefs(store);
const { t, locale } = useI18n();
const MAX_FILE_SIZE = 2097152; //2 MB

const signatureRef = ref(null);
const isEmptySignature = ref(true);
const wasValidated = ref(false);
const signatureKey = ref(0);
const bindedMask = reactive({});
const isSubmissionLocked = ref(false);

const nameError = computed(() => ({ min: 'form.validation.min3characters', required: 'form.validation.theNameIsRequired' }));
const lastnameError = computed(() => ({ min: 'form.validation.min3characters', required: 'form.validation.theLastnameIsRequired' }));
const phoneError = computed(() => ({ typeError: 'form.validation.phoneTypeError', required: 'form.validation.thePhoneIsRequired' }));
const emailError = computed(() => ({ email: 'form.validation.invalidEmail', required: 'form.validation.theEmailIsRequired' }));
const addressError = computed(() => ({ min: 'form.validation.min3characters', required: 'form.validation.theAddressIsRequired' }));
const creditCardError = computed(() => ({ required: 'form.validation.theCreditCardIsRequired' }));
const invoiceNumberError = computed(() => ({ required: 'form.validation.theInvoiceNumberIsRequired' }));
const zipAreaError = computed(() => ({ isAreaCode: 'form.validation.invalidZipCode', required: 'form.validation.theZipCodeIsRequired' }));
const securityCodeError = computed(() => ({ isSecurityCode: 'form.validation.invalidSecurityCode', required: 'form.validation.theSecurityCodeIsRequired' }));
const expirationDateError = computed(() => ({ required: 'form.validation.theExpirationDateIsRequired' }));
const amountError = computed(() => ({ required: 'form.validation.theAmountIsRequired' }));
const identificationPhotoError = computed(() => ({ isValidSize: 'form.validation.invalidFileSize2MB', required: 'form.validation.theIdentificationDocumentIsRequired' }));
const cardInfoImageError = computed(() => ({ isValidSize: 'form.validation.invalidFileSize2MB', required: 'form.validation.theCreditCardPictureIsRequired' }));
const signatureError = computed(() => (isEmptySignature.value && wasValidated.value ? 'form.validation.theSignatureIsRequired': ''));

const schema = Yup.object({
  name: Yup.string().min(3, nameError.value.min).required(nameError.value.required),
  lastname: Yup.string().min(3, lastnameError.value.min).required(lastnameError.value.required),
  phone: Yup.number().typeError(phoneError.value.typeError).required(phoneError.value.required),
  email: Yup.string().email(emailError.value.email).required(emailError.value.required),
  address: Yup.string().min(3, addressError.value.min).required(addressError.value.required),
  creditCard: Yup.string().required(creditCardError.value.required),
  invoiceNumber: Yup.string().required(invoiceNumberError.value.required),
  zipArea: Yup.string().required(zipAreaError.value.required)
    .test("is-area-code", zipAreaError.value.isAreaCode, 
      value => value && !isNaN(value)),
  securityCode: Yup.string().required(securityCodeError.value.required)
    .test("is-security-code", securityCodeError.value.isSecurityCode, 
      value => value && !isNaN(value)),
  expirationDate: Yup.string().required(expirationDateError.value.required),
  amount: Yup.number().required(amountError.value.required),
  identificationPhoto: Yup.mixed().required(identificationPhotoError.value.required)
    .test("is-valid-size", identificationPhotoError.value.isValidSize, 
      value => value && value.size <= MAX_FILE_SIZE),
  cardInfoImage: Yup.mixed().required(cardInfoImageError.value.required)
    .test("is-valid-size", cardInfoImageError.value.isValidSize, 
      value => value && value.size <= MAX_FILE_SIZE),
});

const isSpanishLanguage = computed(() => {
  return getLanguage.value === languages.Spanish;
});

const upperEachOptions = computed(() => isSpanishLanguage.value ? ['de'] : []);

const validateSignature = () => {
  isEmptySignature.value = signatureRef.value.isEmpty();
};

const onSubmit = async ({ validate, resetForm, values, setErrors }) => {
  if (isSubmissionLocked.value) return;
  
  const { valid } = await validate();
  wasValidated.value = true;
  isEmptySignature.value = signatureRef.value.isEmpty();

  if(isEmptySignature.value || !valid) return;

  const data = new FormData();
  data.append('identificationPhoto', values.identificationPhoto);
  data.append('cardInfoImage', values.cardInfoImage);
  data.append('name', values.name);
  data.append('lastname', values.lastname);
  data.append('phone', values.phone);
  data.append('email', values.email);
  data.append('address', values.address);
  data.append('expirationDate', values.expirationDate);
  data.append('creditCard', bindedMask.unmasked);
  data.append('invoiceNumber', Number(values.invoiceNumber));
  data.append('signature', signatureRef.value.save());
  data.append('amount', Number(values.amount));
  data.append('securityCode', values.securityCode);
  data.append('zipCode', values.zipArea);

  try {
    isSubmissionLocked.value = true;
    const { data: isSaved } = await _saveSignatureData(data);

    if (!isSaved) return; 

    await Swal.fire({
      title: capitalize(t('successfullySaved')),
      icon: 'success',
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
      html: '&nbsp;'
    });
  } catch (e) {
    console.error(e);
  } finally {
    isSubmissionLocked.value = false;
  }
};

const onClear = () => signatureRef.value.clear();

const onUndo = () => signatureRef.value.undo();

</script>
<style scoped>

input {
  font-size: 14px;
}
.invalid-message {
  font-size: 12px;
  margin: 0;
}
</style>