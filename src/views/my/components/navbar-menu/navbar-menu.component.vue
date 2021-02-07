<template>
  <nav class="navbar-menu">
    <ul class="navbar-menu__list">
      <router-link
        class="navbar-menu__link"
        :to="routes.my.children[0]"
      >
        <li class="navbar-menu__item">1</li>
      </router-link>
      <router-link
        class="navbar-menu__link"
        :to="routes.my.children[1]"
      >
        <li class="navbar-menu__item">2</li>
      </router-link>
    </ul>
  </nav>
</template>

<script src="./navbar-menu.module.js"></script>

<style scoped src="./navbar-menu.styles.css"></style>
<style scoped src="./navbar-menu.mobile.styles.css"></style>
<style scoped src="./navbar-menu.desktop.styles.css"></style>
