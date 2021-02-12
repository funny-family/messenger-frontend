<template>
  <form
    class="sign-up-form"
    @submit.prevent="submitSignUpForm(signUpFields)"
  >
    <input type="text" placeholder="Username" v-model="signUpFields.username" />
    <input type="text" placeholder="Email" v-model="signUpFields.email" />
    <input type="password" placeholder="Password" v-model="signUpFields.password" />
    <input type="password" placeholder="Confirm password" v-model="signUpFields.confirmPassword" />
    <button type="submit">Sign Up</button>
  </form>
</template>

<script src="./sign-up-form.module.js"></script>

<style scoped src="./sign-up-form.styles.css"></style>
