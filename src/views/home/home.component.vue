<template>
  <!-- <ScrollbarContainer> -->
  <div
    class="home-page container"
    :class="{
      'home-page__no-y-scroll': isNavMenuOpen
    }"
  >
    <NavHeader class="home-page__header" />

    <main class="home-page__main">
      <div
        v-for="i in 100"
        :key="i"
      >
        {{ i }}
      </div>
    </main>

    <NavFooter class="home-page__footer">
      disigned by funny family
    </NavFooter>
  </div>
  <!-- </ScrollbarContainer> -->
</template>

<script src="./home.module.js"></script>

<style scoped src="./home.styles.css"></style>
