<template>
  <form class="sign-in-form">
    <input type="text" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>signin</button>
  </form>
</template>

<script>
export default {
  name: 'SignInForm'
};
</script>

<style scoped>
@import url('./sign-in-form.style.css');
</style>
