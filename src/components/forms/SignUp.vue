<template>
  <form class="sign-up-from" @submit.prevent="signUp(userRegistrationData)">
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
      v-model="userRegistrationData.passwordConfirmation"
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
      passwordConfirmation: ''
    }
  }),
  methods: {
    ...mapActions(['signUp'])
    // async test() {
    //   const url = 'http://localhost:3000/auth/signup';
    //   const response = await fetch(url, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded'
    //     },
    //     body: JSON.stringify(this.userRegistrationData)
    //   });
    //   const result = await response.json();
    //   console.log(result);
    // }
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
