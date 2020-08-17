<template>
  <div>
    <Header />
    <Sign-in class="form" />
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
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
