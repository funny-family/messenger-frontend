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

<script>
import { routes } from '../../../../router';

export default {
  name: 'NavbarMenu',
  setup() {
    return {
      routes
    };
  }
};
</script>

<style scoped>
@import url('./navbar-menu.style.css');
</style>
