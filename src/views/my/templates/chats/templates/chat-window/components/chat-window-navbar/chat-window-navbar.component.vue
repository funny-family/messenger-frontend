<template>
  <header class="chat-window-navbar">
    <router-link
      class="chat-window-navbar__redirect-link hidden-redirect-link"
      :to="{ name: router.getRoutes()[1].name }"
    >
      ⬅
    </router-link>
    <p>This current chat id: {{ $route.params.id }}</p>
  </header>
</template>

<script src="./chat-window-navbar.module.js"></script>

<style scoped src="./chat-window-navbar.styles.css"></style>

<style scoped src="./chat-window-navbar.styles.modile.css"></style>

<style scoped src="./chat-window-navbar.styles.deskop.css"></style>
