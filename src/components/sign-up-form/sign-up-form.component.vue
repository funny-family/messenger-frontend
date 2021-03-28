<template>
  <form
    class="sign-up-form"
    @submit.prevent="submitSignUpForm(signUpFields)"
  >
    <input
      v-model="signUpFields.username"
      type="text"
      placeholder="Username"
    />
    <input
      v-model="signUpFields.email"
      type="text"
      placeholder="Email"
    />
    <input
      v-model="signUpFields.password"
      type="password"
      placeholder="Password"
    />
    <input
      v-model="signUpFields.confirmPassword"
      type="password"
      placeholder="Confirm password"
    />
    <button type="submit">
      Sign Up
    </button>
  </form>
</template>

<script src="./sign-up-form.module.js"></script>

<style scoped src="./sign-up-form.styles.css"></style>
