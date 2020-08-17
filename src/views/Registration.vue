<template>
  <div>
    <Header />
    <Sign-up class="form" />
  </div>
</template>

<script>
import SignUp from '@/components/forms/SignUp.vue';

export default {
  components: {
    'Sign-up': SignUp
  }
};
</script>

<style scoped>
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
