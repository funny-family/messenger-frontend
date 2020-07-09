<template>
  <form
    class="sign-up-from"
    @submit.prevent="signUp(userRegistrationData)"
  >
    <div>Sign up</div>
    <input
      class=""
      type="text"
      autocomplete="off"
      placeholder="Username"
      v-model="userRegistrationData.username"
    />
    <input
      class=""
      type="text"
      autocomplete="off"
      placeholder="Email"
      v-model="userRegistrationData.email"
    />
    <input
      class=""
      type="password"
      autocomplete="off"
      placeholder="Password"
      v-model="userRegistrationData.password"
      >
    <input
      class=""
      type="password"
      autocomplete="off"
      placeholder="Confirm password"
      v-model="userRegistrationData.password_confirmation"
    />
    <button type="submit">Sign up</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
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
