import Validator from 'validatorjs';

const ValidatorJS = (data, rules) => {
  const validation = new Validator(data, rules);
  const validationObj = { isValid: () => validation.passes() };
  if (validation.fails()) {
    validationObj.getErrors = () => validation.errors.all();
  }
  return Object.freeze(validationObj);
};

const validation = {
  signupValidator: data => {
    const rules = {
      email: 'required|email',
      firstName: 'required|min:3|string|max:20',
      lastName: 'required|min:3|string|max:20',
      password: 'required|min:6|confirmed',
      password_confirmation: 'required'
    };
    return ValidatorJS(data, rules);
  },

  loginValidator: data => {
    const rules = {
      email: 'required|email',
      password: 'required|min:6'
    };
    return ValidatorJS(data, rules);
  }
};

export default validation;
