<template>
  <form class="sign-up-form">
    <input type="text" placeholder="Username" />
    <input type="text" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <input type="password" placeholder="Confirm password" />
    <button>Sign Up</button>
  </form>
</template>

<script>
export default {
  name: 'Sign-Up-Form'
};
</script>

<style scoped>
@import url('./sign-up-form.style.css');
</style>
