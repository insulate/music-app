// https://vee-validate.logaretm.com/v4/
// https://vee-validate.logaretm.com/v4/guide/global-validators#@vee-validate/rules
/* eslint linebreak-style: ["error", "windows"] */
import {
  Form as VeeForm, Field as VeeField, defineRule, ErrorMessage, configure,
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
    defineRule('tos', required);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('alpha_spaces', alphaSpaces);
    defineRule('email', email);
    defineRule('min_value', minValue);
    defineRule('max_value', maxValue);
    defineRule('password_mismatch', confirmed);
    defineRule('excluded', excluded);
    defineRule('country_excluded', excluded);

    // custom message from error
    configure({
      generateMessage: (ctx) => {
        console.log(ctx.rule.params[0]);
        const messages = {
          required: `ช่อง ${ctx.field} ต้องไม่ว่าง`,
          min: `The fiend ${ctx.field} must be at least ${ctx.rule.params.length ? ctx.rule.params[0] : ''} characters`,
          max: `The fiend ${ctx.field} must be at most ${ctx.rule.params.length ? ctx.rule.params[0] : ''} characters`,
          alpha_spaces: `The fiend ${ctx.field} must contain only letters and spaces`,
          email: `The fiend ${ctx.field} must be a valid email`,
          min_value: `The fiend ${ctx.field} must be at least ${ctx.rule.params.length ? ctx.rule.params[0] : ''}`,
          max_value: `The fiend ${ctx.field} must be at most ${ctx.rule.params.length ? ctx.rule.params[0] : ''}`,
          excluded: `You are not allowed to use ${ctx.field}`,
          country_excluded: `Due to restrictions of the country, you are not allowed to use ${ctx.field}`,
          password_mismatch: 'The password confirmation does not match',
          tos: 'You must accept the terms of service',
        };
        const message = messages[ctx.rule.name] ? messages[ctx.rule.name] : `The fiend ${ctx.field} is invalid`;
        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
