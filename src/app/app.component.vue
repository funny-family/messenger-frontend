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

<style lang="scss" src="./app.styles.scss"></style>

<style src="../assets/fonts/fonts.css"></style>

<style scoped lang="scss" src="../assets/styles/transitions/fade-in-down.scss"></style>
