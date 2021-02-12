<template>
  <form
    class="sign-in-form"
    @submit.prevent="submitSignInForm(signInFields)"
  >
    <input type="text" placeholder="Email" v-model="signInFields.username" />
    <input type="password" placeholder="Password" v-model="signInFields.password" />
    <button type="submit">signin</button>
  </form>
</template>

<script src="./sign-in-form.module.js"></script>

<style scoped src="./sign-in-form.styles.css"></style>
