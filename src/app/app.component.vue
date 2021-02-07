<template>
  <router-view v-slot="{ Component }">
    <transition
      name="fade-in-down"
      mode="out-in"
    >
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script src="./app.module.js"></script>

<style src="./app.styles.css"></style>
<style scoped src="../assets/styles/transitions/fade-in-down.css"></style>
