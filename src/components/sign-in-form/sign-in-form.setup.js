import { reactive } from 'vue';

export function setup() {
  const signInFields = reactive({
    username: '',
    password: ''
  });

  const submitSignInForm = (formFields) => {
    console.log('Sign in form fields:', formFields);
  };

  return {
    submitSignInForm,
    signInFields
  };
}
