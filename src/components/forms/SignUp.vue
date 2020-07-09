<template>
  <div class="sign-up-form-position">
    <form
      class="sign-up-from"
      @submit.prevent="signUp(userRegistrationData)"
    >
      <div>Sign up</div>
      <Text-input
        class="sign-up-input"
        type="text"
        placeholder="Username"
        v-model="userRegistrationData.username"
      />
      <Text-input
        class="sign-up-input"
        type="text"
        placeholder="Email"
        v-model="userRegistrationData.email"
      />
      <Password-input
        class="sign-up-input"
        type="password"
        placeholder="Password"
        v-model="userRegistrationData.password"
      />
      <Password-input
        class="sign-up-input"
        type="password"
        placeholder="Password confirmation"
        v-model="userRegistrationData.password_confirmation"
      />
      <Submit-button class="sign-up-button">Sign in</Submit-button>
    </form>
  </div>
</template>

<script>
import TextInput from '@/components/inputs/TextInput.vue';
import PasswordInput from '@/components/inputs/PasswordInput.vue';
import SubmitButton from '@/components/buttons/SubmitButton.vue';

import { mapActions } from 'vuex';

export default {
  components: {
    'Text-input': TextInput,
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
  }
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
