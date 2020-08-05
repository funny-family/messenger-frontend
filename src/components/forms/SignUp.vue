<template>
  <div class="sign-up-form-position">
    <form
      class="sign-up-from"
      @submit.prevent="signUp(userRegistrationData)"
    >
      <div>Sign up</div>
      <Clearable-input
        class="sign-up-input"
        type="text"
        name="username"
        autocomplete="username"
        placeholder="Username"
        :autofocus="true"
        v-model="userRegistrationData.username"
      />
      <Clearable-input
        class="sign-up-input"
        type="text"
        name="email"
        autocomplete="email"
        placeholder="Email"
        v-model="userRegistrationData.email"
      />
      <Password-input
        class="sign-up-input"
        type="password"
        name="password"
        autocomplete="new-password"
        placeholder="Password"
        v-model="userRegistrationData.password"
      />
      <Password-input
        class="sign-up-input"
        type="password"
        name="password_confirmation"
        autocomplete="off"
        placeholder="Password confirmation"
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

import { mapActions } from 'vuex';

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
    }
  }),
  methods: {
    ...mapActions(['signUp'])
  },
  mounted() {}
};
</script>

<style scoped>
.sign-up-from {
  width: 300px;
  min-width: 300px;
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
