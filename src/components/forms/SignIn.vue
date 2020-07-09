<template>
  <form
    class="sign-in-from"
    @submit.prevent="signIn(userLoginData)"
  >
    <div>Sign in</div>
    <input
      class="sign-in-from__email"
      type="text"
      placeholder="Email"
      v-model="userLoginData.email"
    />
    <input
      class="sign-in-from__password"
      type="password"
      placeholder="Password"
      v-model="userLoginData.password"
    />
    <button type="submit">Sign in</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
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

<style lang="scss" scoped>
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
