<template>
  <div>
    <Header />
    <Sign-in class="sign-in-from-container" />
  </div>
</template>

<script>
import Header from '@/components/navigations/Header.vue';
import SignIn from '@/components/forms/SignIn.vue';

export default {
  components: {
    Header,
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
