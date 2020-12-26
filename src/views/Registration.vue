<template>
  <div>
    <SignUpForm class="sign-up-from-container" />
  </div>
</template>

<script>
import SignUpForm from '@/components/forms/SignUpForm.vue';

export default {
  components: {
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
