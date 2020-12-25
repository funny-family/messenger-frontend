<template>
  <transition
    name="fade-in-down"
    mode="out-in"
    v-if="isPageLoaded"
  >
    <router-view/>
  </transition>
</template>

<script>
export default {
  data: () => ({
    isPageLoaded: false
  }),
  mounted() {
    this.$data.isPageLoaded = true;
  }
};
</script>

<style>
@import url('./assets/styles/main.css');
</style>
