import { reactive } from 'vue';

export function setup() {
  const signInFields = reactive({
    email: '',
    password: ''
  });

  const submitSignInForm = (formFields) => {
    // eslint-disable-next-line
    console.log('Sign in form fields:', formFields);
    // eslint-disable-next-line
    formFields.email = '';
    // eslint-disable-next-line
    formFields.password = '';
  };

  const resetSignInform = () => {};

  return {
    submitSignInForm,
    resetSignInform,
    signInFields
  };
}
