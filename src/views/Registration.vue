<template>
  <div>
    <nav-header />
    <sign-up-form class="sign-up-from-container" />
  </div>
</template>

<script>
import NavHeader from '@/components/navigations/NavHeader.vue';
import SignUpForm from '@/components/forms/SignUpForm.vue';

export default {
  components: {
    NavHeader,
    SignUpForm
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
