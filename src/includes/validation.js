// https://vee-validate.logaretm.com/v4/
// https://vee-validate.logaretm.com/v4/guide/global-validators#@vee-validate/rules
/* eslint linebreak-style: ["error", "windows"] */
import {
  Form as VeeForm, Field as VeeField, defineRule, ErrorMessage,
} from 'vee-validate';
import {
  required, email, min, max, alpha_spaces as alphaSpaces, min_value as minValue, max_value as maxValue, confirmed, not_one_of as excluded,
} from '@vee-validate/rules';

export default {
  install(app) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('ErrorMessage', ErrorMessage);

    defineRule('required', required);
    defineRule('email', email);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('alpha_spaces', alphaSpaces);
    defineRule('min_value', minValue);
    defineRule('max_value', maxValue);
    defineRule('confirmed', confirmed);
    defineRule('excluded', excluded);
  },
};
