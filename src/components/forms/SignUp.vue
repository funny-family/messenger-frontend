<template>
  <div class="sign-up-form-position">
    <form
      class="sign-up-from"
      @submit.prevent="signUp"
    >
      <Clearable-input
        ref="username"
        class="sign-up-input"
        type="text"
        name="username"
        autocomplete="username"
        placeholder="Create username"
        :error="formFieldError.username"
        :animated="formFieldAnimation.username"
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
        :animated="formFieldAnimation.email"
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
        :animated="formFieldAnimation.password"
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
        :animated="formFieldAnimation.password_confirmation"
        v-model="userRegistrationData.password_confirmation"
      />
      <Submit-button class="sign-up-button">Sign in</Submit-button>
      <router-link to="signin">
        <div class="new-account-link">If you don't have account you can create it <b>here</b>!</div>
      </router-link>
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
    ClearableInput,
    PasswordInput,
    SubmitButton
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
    formFieldAnimation: {
      username: false,
      email: false,
      password: false,
      password_confirmation: false
    }
  }),
  methods: {
    animateErrorField(fieldName) {
      this.$data.formFieldAnimation[fieldName] = true;
      setTimeout(() => {
        this.$data.formFieldAnimation[fieldName] = false;
      }, 400);
    },

    setFocusToField(fieldName) {
      this.$refs[fieldName].$el.children[0].firstChild.focus();
    },

    // part of error checks was moved to client side to not load the server
    errorsChecking() {
      if (this.$data.userRegistrationData.username === '') {
        this.$data.formFieldError.username = 'Username is required!';
        this.animateErrorField('username');
      } else if (this.$data.userRegistrationData.username.length < usernameLength) {
        this.$data.formFieldError.username = `Username must be at least ${usernameLength} characters!`;
        this.animateErrorField('username');
      } else {
        this.$data.formFieldError.username = '';
      }

      if (this.$data.userRegistrationData.email === '') {
        this.$data.formFieldError.email = 'Email is required!';
        this.animateErrorField('email');
      } else {
        this.$data.formFieldError.email = '';
      }

      if (this.$data.userRegistrationData.password === '') {
        this.$data.formFieldError.password = 'Password is required!';
        this.animateErrorField('password');
      } else if (this.$data.userRegistrationData.password.length < passwordLength) {
        this.$data.formFieldError.password = `Password must be at least ${passwordLength} characters!`;
        this.animateErrorField('password');
      } else {
        this.$data.formFieldError.password = '';
      }

      if (this.$data.userRegistrationData.password_confirmation === '') {
        this.$data.formFieldError.password_confirmation = 'Password should be confirmed!';
        this.animateErrorField('password_confirmation');
      } else if (
        this.$data.userRegistrationData.password_confirmation !==
        this.$data.userRegistrationData.password
      ) {
        this.$data.formFieldError.password_confirmation = 'Passwords must match!';
        this.animateErrorField('password_confirmation');
      } else {
        this.$data.formFieldError.password_confirmation = '';
      }
    },

    clearObjectData(object) {
      const clearableObject = this.$data[object];
      Object.keys(clearableObject).forEach((key) => {
        clearableObject[key] = '';
      });
      return clearableObject;
    },

    setFocusToErrorField() {
      if (this.$data.formFieldError.username !== '') {
        this.setFocusToField('username');
      } else if (this.$data.formFieldError.email !== '') {
        this.setFocusToField('email');
      } else if (this.$data.formFieldError.password !== '') {
        this.setFocusToField('password');
      } else if (this.$data.formFieldError.password_confirmation !== '') {
        this.setFocusToField('passwordConfirmation');
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
          this.animateErrorField('email');

          // if sign up result successful
          if (await this.$store.state.auth.isUserSiggedUp === true) {
            this.clearObjectData('userRegistrationData');
            this.clearObjectData('formFieldError');
          }
        }
        this.setFocusToErrorField();
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
    this.setFocusToField('username');
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

.new-account-link {
  letter-spacing: 0.3px;
}

.new-account-link::after {
  content: '';
  display: block;
  width: 0;
  height: 1px;
  background-color: var(--primary-accent-color);
  transition: width 0.3s;
}

.new-account-link:hover::after {
  width: 100%;
  transition: width 0.3s;
}
</style>
