<template>
  <form
    class="sign-in-from"
    @submit.prevent="signIn(userLoginData)"
  >
    <div>Sign in</div>
    <Text-input
      type="text"
      placeholder="Email"
      v-model="userLoginData.email"
    />
    <Password-input
      type="password"
      placeholder="Password"
      v-model="userLoginData.password"
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
    userLoginData: {
      email: '',
      password: ''
    }
  }),
  methods: {
    ...mapActions(['signIn'])
  }
};
</script>

<style scoped>
.sign-in-from {
  min-width: 280px;
  display: flex;
  flex-direction: column;
}

input {
  position: relative;
  padding: 8px 12px;
}
</style>
