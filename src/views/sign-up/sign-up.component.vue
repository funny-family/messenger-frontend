<template>
  <div class="sign-up-page">
    <SignUpForm />
  </div>
</template>

<script>
import SignUpForm from '@/components/sign-up-form';

export default {
  name: 'SignUp',
  components: {
    SignUpForm
  }
};
</script>

<style scoped>
@import url('./sign-up.style.css');
</style>
