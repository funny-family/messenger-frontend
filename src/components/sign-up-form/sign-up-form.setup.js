import { reactive } from 'vue';

export function setup() {
  const signUpFields = reactive({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const submitSignUpForm = (formFields) => {
    // eslint-disable-next-line
    console.log('Sign up form fields:', formFields);
  };

  return {
    submitSignUpForm,
    signUpFields
  };
}
