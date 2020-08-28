<template>
  <div>
    <Header />
    <sign-up-form class="sign-up-from-container" />
  </div>
</template>

<script>
import Header from '@/components/navigations/Header.vue';
import SignUpForm from '@/components/forms/SignUpForm.vue';

export default {
  components: {
    Header,
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
