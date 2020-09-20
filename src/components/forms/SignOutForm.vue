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
    async signOut() {
      await this.$store.dispatch('signOut');
      this.$router.replace('/signin');
    }
  }
};
</script>

<style scoped>

</style>
