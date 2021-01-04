<template>
  <header class="nav-header">
    <h2 class="nav-header__logo">Chatus</h2>
    <nav
      class="nav-header__list-container"
      :class="{
        'nav-header__list-container__showed': isMenuOpen
      }"
    >
      <ul class="nav-header__list">
        <li class="nav-header__item">
          <router-link to="/signin">
            Sign in
          </router-link>
        </li>
        <li class="nav-header__item">
          <router-link to="/signup">
            Sign up
          </router-link>
        </li>
      </ul>
    </nav>
    <BurgerButton
      class="nav-header__burger-button"
      :state="isMenuOpen"
      @change-state="changeMenuState"
    />
  </header>
</template>

<script>
import { ref } from 'vue';
import BurgerButton from '@/components/burger-button';

export default {
  name: 'NavHeader',
  components: {
    BurgerButton
  },
  props: {
    isFixedWhenOpen: {
      default: false,
      type: Boolean
    }
  },
  setup() {
    const isMenuOpen = ref(false);

    function changeMenuState() {
      isMenuOpen.value = !isMenuOpen.value;
    }

    return {
      isMenuOpen,
      changeMenuState
    };
  }
};
</script>

<style scoped>
@import url('./nav-header.style.css');
@import url('./nav-header.media-style.css');
</style>
