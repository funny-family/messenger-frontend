<template>
  <form
    class="sign-up-from"
    @submit.prevent="signUp(userRegistrationData)"
  >
    <div>Sign up</div>
    <Text-input
      type="text"
      placeholder="Username"
      v-model="userRegistrationData.username"
    />
    <Text-input
      type="text"
      placeholder="Email"
      v-model="userRegistrationData.email"
    />
    <Password-input
      type="password"
      placeholder="Password"
      v-model="userRegistrationData.password"
    />
    <Password-input
      type="password"
      placeholder="Password confirmation"
      v-model="userRegistrationData.password_confirmation"
    />
    <Submit-button>Sign in</Submit-button>
  </form>
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

<style lang="scss" scoped>
.sign-up-from {
  min-width: 280px;
  display: flex;
  flex-direction: column;
}

input {
  position: relative;
  padding: 8px 12px;
}
</style>
