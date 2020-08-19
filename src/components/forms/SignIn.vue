<template>
  <div class="sign-in-form-position">
    <form
      class="sign-in-from"
      @submit.prevent="signIn(userLoginData)"
    >
      <div>Sign in</div>
      <Clearable-input
        class="sign-in-input"
        type="text"
        name="email"
        autocomplete="email"
        placeholder="Email address"
        v-model="userLoginData.email"
      />
      <Password-input
        class="sign-in-input"
        type="password"
        name="password"
        autocomplete="current-password"
        placeholder="Password"
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

import { mapActions } from 'vuex';

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
    }
  }),
  methods: {
    ...mapActions(['signIn'])
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
