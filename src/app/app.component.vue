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
import { onBeforeMount } from 'vue';

export default {
  name: 'App',
  setup() {
    const bodyElement = document.querySelector('body');

    onBeforeMount(() => {
      if (!bodyElement.classList.length) {
        bodyElement.classList.add('light'); // set "light" class as default theme
      } else {
        bodyElement.classList.add('light');
      }
    });
  }
};
</script>

<style>
@import url('./app.style.css');
</style>
