<template>
  <div class="sign-up-form-position">
    <form
      class="sign-up-from"
      @submit.prevent="signUp"
    >
      <div>Sign up</div>
      <Clearable-input
        ref="username"
        class="sign-up-input"
        type="text"
        name="username"
        autocomplete="username"
        placeholder="Create username"
        :error="formFieldError.username"
        :animated="fieldAnimation.username"
        v-model="userRegistrationData.username"
      />
      <Clearable-input
        ref="email"
        class="sign-up-input"
        type="text"
        name="email"
        autocomplete="email"
        placeholder="Enter your email address"
        :error="formFieldError.email"
        :animated="fieldAnimation.email"
        v-model="userRegistrationData.email"
      />
      <Password-input
        ref="password"
        class="sign-up-input"
        type="password"
        name="password"
        autocomplete="new-password"
        placeholder="Create password"
        :error="formFieldError.password"
        :animated="fieldAnimation.password"
        v-model="userRegistrationData.password"
      />
      <Password-input
        ref="passwordConfirmation"
        class="sign-up-input"
        type="password"
        name="password_confirmation"
        autocomplete="off"
        placeholder="Confirm password"
        :error="formFieldError.password_confirmation"
        :animated="fieldAnimation.password_confirmation"
        v-model="userRegistrationData.password_confirmation"
      />
      <Submit-button class="sign-up-button">Sign in</Submit-button>
    </form>
  </div>
</template>

<script>
import ClearableInput from '@/components/inputs/ClearableInput.vue';
import PasswordInput from '@/components/inputs/PasswordInput.vue';
import SubmitButton from '@/components/buttons/SubmitButton.vue';

const usernameLength = 4;
const passwordLength = 6;

export default {
  components: {
    'Clearable-input': ClearableInput,
    'Password-input': PasswordInput,
    'Submit-button': SubmitButton
  },
  data: () => ({
    userRegistrationData: {
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
    },
    formFieldError: {
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
    },
    fieldAnimation: {
      username: false,
      email: false,
      password: false,
      password_confirmation: false
    }
  }),
  methods: {
    setAnimationToUsernameErrorField() {
      this.$data.fieldAnimation.username = true;
      setTimeout(() => {
        this.$data.fieldAnimation.username = false;
      }, 500);
    },
    setAnimationToEmailErrorField() {
      this.$data.fieldAnimation.email = true;
      setTimeout(() => {
        this.$data.fieldAnimation.email = false;
      }, 500);
    },
    setAnimationToPasswordErrorField() {
      this.$data.fieldAnimation.password = true;
      setTimeout(() => {
        this.$data.fieldAnimation.password = false;
      }, 500);
    },
    setAnimationToPasswordConfirmationErrorField() {
      this.$data.fieldAnimation.password_confirmation = true;
      setTimeout(() => {
        this.$data.fieldAnimation.password_confirmation = false;
      }, 500);
    },
    setFocusToUsernameField() {
      this.$refs.username.$el.children[0].firstChild.focus();
    },
    setFocusToEmailField() {
      this.$refs.email.$el.children[0].firstChild.focus();
    },
    setFocusToPasswordField() {
      this.$refs.password.$el.children[0].firstChild.focus();
    },
    setFocusToPasswordConfirmationField() {
      this.$refs.passwordConfirmation.$el.children[0].firstChild.focus();
    },
    // part of error checks was moved to client side to not load the server
    errorsChecking() {
      if (this.$data.userRegistrationData.username === '') {
        this.$data.formFieldError.username = 'Username is required!';
        this.setAnimationToUsernameErrorField();
      } else if (this.$data.userRegistrationData.username.length < usernameLength) {
        this.$data.formFieldError.username = `Username must be at least ${usernameLength} characters!`;
        this.setAnimationToUsernameErrorField();
      } else {
        this.$data.formFieldError.username = '';
      }

      if (this.$data.userRegistrationData.email === '') {
        this.$data.formFieldError.email = 'Email is required!';
        this.setAnimationToEmailErrorField();
      } else {
        this.$data.formFieldError.email = '';
      }

      if (this.$data.userRegistrationData.password === '') {
        this.$data.formFieldError.password = 'Password is required!';
        this.setAnimationToPasswordErrorField();
      } else if (this.$data.userRegistrationData.password.length < passwordLength) {
        this.$data.formFieldError.password = `Password must be at least ${passwordLength} characters!`;
        this.setAnimationToPasswordErrorField();
      } else {
        this.$data.formFieldError.password = '';
      }

      if (this.$data.userRegistrationData.password_confirmation === '') {
        this.$data.formFieldError.password_confirmation = 'Password should be confirmed!';
        this.setAnimationToPasswordConfirmationErrorField();
      } else if (
        this.$data.userRegistrationData.password_confirmation !==
        this.$data.userRegistrationData.password
      ) {
        this.$data.formFieldError.password_confirmation = 'Passwords must match!';
        this.setAnimationToPasswordConfirmationErrorField();
      } else {
        this.$data.formFieldError.password_confirmation = '';
      }
    },
    async signUp() {
      try {
        await this.errorsChecking();
        if (
          this.$data.formFieldError.username === '' &&
          this.$data.formFieldError.email === '' &&
          this.$data.formFieldError.password === '' &&
          this.$data.formFieldError.password_confirmation === ''
        ) {
          await this.$store.dispatch('signUp', this.$data.userRegistrationData);
          this.$data.formFieldError.email = this.$store.state.auth.authError.email.message;
          this.setAnimationToEmailErrorField();
          // if sign up result successful
          if (await this.$store.state.auth.isUserSiggedUp === true) {
            this.$data.userRegistrationData.username = '';
            this.$data.userRegistrationData.email = '';
            this.$data.userRegistrationData.password = '';
            this.$data.userRegistrationData.password_confirmation = '';

            this.$data.formFieldError.username = '';
            this.$data.formFieldError.email = '';
            this.$data.formFieldError.password = '';
            this.$data.formFieldError.password_confirmation = '';
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  computed: {
    usernameFieldValue() {
      return this.$data.userRegistrationData.username;
    },
    emailFieldValue() {
      return this.$data.userRegistrationData.email;
    },
    passwordFieldValue() {
      return this.$data.userRegistrationData.password;
    },
    passwordConfirmationFieldValue() {
      return this.$data.userRegistrationData.password_confirmation;
    }
  },
  watch: {
    usernameFieldValue() {
      if (this.$data.userRegistrationData.username !== '') {
        this.$data.formFieldError.username = '';
      }
    },
    emailFieldValue() {
      if (this.$data.userRegistrationData.email !== '') {
        this.$data.formFieldError.email = '';
      }
    },
    passwordFieldValue() {
      if (this.$data.userRegistrationData.password !== '') {
        this.$data.formFieldError.password = '';
      }
    },
    passwordConfirmationFieldValue() {
      if (this.$data.userRegistrationData.password_confirmation !== '') {
        this.$data.formFieldError.password_confirmation = '';
      }
    }
  },
  mounted() {
    this.setFocusToUsernameField();
  }
};
</script>

<style scoped>
.sign-up-from {
  width: 400px;
  min-width: 400px;
}

.sign-up-input {
  width: 100%;
  margin: 12px 0;
}

.sign-up-button {
  width: 100%;
  margin: 20px 0;
}
</style>
