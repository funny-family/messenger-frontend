<template>
  <div>
    <Header />
    <Sign-up class="sign-up-from-container" />
  </div>
</template>

<script>
import Header from '@/components/navigations/Header.vue';
import SignUp from '@/components/forms/SignUp.vue';

export default {
  components: {
    Header,
    'Sign-up': SignUp
  }
};
</script>

<style scoped>
.sign-up-from-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
