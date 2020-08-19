<template>
  <div class="sign-in-form-position">
    <form
      class="sign-in-from"
      @submit.prevent="signIn"
    >
      <Clearable-input
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

    async singIn() {
      if (1) {
        await this.$store.dispatch('signIp', this.$data.userLoginData);
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
