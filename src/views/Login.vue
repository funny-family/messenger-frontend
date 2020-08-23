<template>
  <div>
    <Header />
    <Sign-in class="sign-in-from-container" />
  </div>
</template>

<script>
import SignIn from '@/components/forms/SignIn.vue';

export default {
  components: {
    'Sign-in': SignIn
  }
};
</script>

<style scoped>
.sign-in-from-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
