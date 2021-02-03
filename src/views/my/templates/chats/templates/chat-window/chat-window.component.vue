<template>
  <div class="chat-window">
    This current chat id: {{ $route.params.id }}
    <router-link
      class="chat-window__redirect-link hidden-redirect-link"
      :to="{
        name: chatsRoute
      }"
      ref="redirectLink"
    >
      ⬅
    </router-link>
  </div>
</template>

<script>
import { ref } from 'vue';
import { routes } from '@/router';

export default {
  name: 'ChatWindow',
  setup() {
    const chatsRoute = routes.my.children[0].name;
    const redirectLink = ref(null);

    return {
      chatsRoute,
      redirectLink
    };
  }
};
</script>

<style scoped src="./chat-window.styles.css"></style>
<style scoped src="./chat-window.mobile.styles.css"></style>
<style scoped src="./chat-window.desktop.styles.css"></style>
