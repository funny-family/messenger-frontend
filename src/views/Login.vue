<template>
  <div>
    <Header />
    <sign-in-form class="sign-in-from-container" />
  </div>
</template>

<script>
import Header from '@/components/navigations/Header.vue';
import SignInForm from '@/components/forms/SignInForm.vue';

export default {
  components: {
    Header,
    SignInForm
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
