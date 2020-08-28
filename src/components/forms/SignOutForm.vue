<template>
  <div>
    <form
      class="sign-out-from"
      @submit.prevent="signOut"
    >
      <MultiButton
        type="submit"
        :formnovalidate="true"
      >
        Sign out
      </MultiButton>
    </form>
  </div>
</template>

<script>
import MultiButton from '@/components/buttons/MultiButton.vue';

export default {
  components: {
    MultiButton
  },
  methods: {
    signOut() {
      this.$store.dispatch('signOut');
    }
  }
};
</script>

<style scoped>

</style>
