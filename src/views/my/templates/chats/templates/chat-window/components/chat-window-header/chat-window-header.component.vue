<template>
  <header class="chat-window-header">
    <router-link
      class="chat-window-header__redirect-link hidden-redirect-link"
      :to="{
        name: chatsRoute
      }"
    >
      ⬅
    </router-link>
    <p>This current chat id: {{ $route.params.id }}</p>
  </header>
</template>

<script src="./chat-window-header.module.js"></script>

<style scoped src="./chat-widnow-header.styles.css"></style>
<style scoped src="./chat-widnow-header.desktop.styles.css"></style>
