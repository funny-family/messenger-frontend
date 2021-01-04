<template>
  <div class="sign-in-page">
    <SignInFrom />
  </div>
</template>

<script>
import SignInFrom from '@/components/sign-in-form';

export default {
  name: 'SignIn',
  components: {
    SignInFrom
  }
};
</script>

<style scoped>
@import url('./sign-in.style.css');
</style>
