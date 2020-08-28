<template>
  <div>
    <nav-header />
    <sign-in-form class="sign-in-from-container" />
  </div>
</template>

<script>
import NavHeader from '@/components/navigations/NavHeader.vue';
import SignInForm from '@/components/forms/SignInForm.vue';

export default {
  components: {
    NavHeader,
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
