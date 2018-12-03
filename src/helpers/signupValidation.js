import Validator from 'validatorjs';

const rules = {
  email: 'required|email',
  firstName: 'required|min:3|string|max:20',
  lastName: 'required|min:3|string|max:20',
  password: 'required|min:6|confirmed',
  password_confirmation: 'required'
};

const customerValidation = (data) => {
  const validation = new Validator(data, rules);
  const validationObj = { isValid: () => validation.passes() };
  if (validation.fails()) {
    validationObj.getErrors = () => validation.errors.all();
  }
  return Object.freeze(validationObj);
};

export default customerValidation;