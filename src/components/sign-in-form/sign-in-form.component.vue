<template>
  <form
    class="sign-in-form"
    @submit.prevent="submitSignInForm(signInFields)"
  >
    <input
      v-model="signInFields.email"
      type="text"
      placeholder="Email"
    />
    <input
      v-model="signInFields.password"
      type="password"
      placeholder="Password"
    />
    <button type="submit">
      signin
    </button>
    <button
      type="button"
      @click="resetSignInform"
    >
      reset
    </button>
  </form>
</template>

<script src="./sign-in-form.module.js"></script>

<style scoped src="./sign-in-form.styles.css"></style>
