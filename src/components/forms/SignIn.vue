<template>
  <div class="sign-in-form-position">
    <form
      class="sign-in-from"
      @submit.prevent="signIn"
    >
      <Clearable-input
        ref="email"
        class="sign-in-input"
        type="text"
        name="email"
        autocomplete="email"
        placeholder="Email address"
        :error="formFieldError.email"
        :animated="formFieldAnimation.email"
        v-model="userLoginData.email"
      />
      <Password-input
        ref="password"
        class="sign-in-input"
        type="password"
        name="password"
        autocomplete="current-password"
        placeholder="Password"
        :error="formFieldError.password"
        :animated="formFieldAnimation.password"
        v-model="userLoginData.password"
      />
      <MultiButton
        class="sign-in-button"
        type="submit"
        :formnovalidate="true"
      >
        Sign in
      </MultiButton>
    </form>
  </div>
</template>

<script>
import ClearableInput from '@/components/inputs/ClearableInput.vue';
import PasswordInput from '@/components/inputs/PasswordInput.vue';
import MultiButton from '@/components/buttons/MultiButton.vue';

export default {
  components: {
    ClearableInput,
    PasswordInput,
    MultiButton
  },
  data: () => ({
    userLoginData: {
      email: '',
      password: ''
    },
    formFieldError: {
      email: '',
      password: ''
    },
    formFieldAnimation: {
      email: false,
      password: false
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

    errorsChecking() {
      if (this.$data.userLoginData.email === '') {
        this.$data.formFieldError.email = 'Email is required!';
        this.animateErrorField('email');
      } else {
        this.$data.formFieldError.email = '';
      }

      if (this.$data.userLoginData.password === '') {
        this.$data.formFieldError.password = 'Password is required!';
        this.animateErrorField('password');
      } else {
        this.$data.formFieldError.password = '';
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
      if (this.$data.formFieldError.email !== '') {
        this.setFocusToField('email');
      } else if (this.$data.formFieldError.password !== '') {
        this.setFocusToField('password');
      }
    },

    async signIn() {
      await this.errorsChecking();
      if (
        this.$data.formFieldError.email === '' &&
        this.$data.formFieldError.password === ''
      ) {
        console.log(123131);
      }
    }
  },
  computed: {
    emailFieldValue() {
      return this.$data.userLoginData.email;
    },
    passwordFieldValue() {
      return this.$data.userLoginData.password;
    }
  },
  watch: {
    emailFieldValue() {
      if (this.$data.userLoginData.email !== '') {
        this.$data.formFieldError.email = '';
      }
    },
    passwordFieldValue() {
      if (this.$data.userLoginData.password !== '') {
        this.$data.formFieldError.password = '';
      }
    }
  }
};
</script>

<style scoped>
.sign-in-from {
  width: 400px;
  min-width: 400px;
}

.sign-in-input {
  width: 100%;
  margin: 12px 0;
}

.sign-in-button {
  width: 100%;
  margin: 20px 0;
}
</style>
