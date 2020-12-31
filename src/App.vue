<template>
  <router-view v-slot="routerView">
    <transition
      name="fade-in-down"
      mode="out-in"
    >
      <component :is="routerView.Component" />
    </transition>
  </router-view>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
@import url('./assets/styles/main.css');
@import url('./assets/styles/transitions/fade-in-down.css');
</style>
