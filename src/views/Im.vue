<template>
  <div>
    Im page!
    <SignOutForm />
  </div>
</template>

<script>
import SignOutForm from '@/components/forms/SignOutForm.vue';

export default {
  components: {
    SignOutForm
  },
  mounted() {
    this.$store.dispatch('getUserInfo');
  }
};
</script>

<style scoped>

</style>
