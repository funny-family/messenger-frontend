<template>
  <header class="nav-header">
    <h2 class="nav-header__logo">Chatus</h2>
    <nav
      class="nav-header__list-container"
      :class="{
        'nav-header__list-container__showed': !isMenuOpen
      }"
    >
      <ul class="nav-header__list">
        <li class="nav-header__item">
          <router-link
            to="/signin"
            v-if="this.$store.state.auth.isUserLoggedIn === false"
          >
            Sign in
          </router-link>
        </li>
        <li class="nav-header__item">
          <router-link
            to="/signup"
            v-if="this.$store.state.auth.isUserLoggedIn === false"
          >
            Sign up
          </router-link>
        </li>
      </ul>
    </nav>
    <BurgerButton
      class="nav-header__burger-button"
      :isOpened="isMenuOpen"
      @change="changeMenuState"
    />
  </header>
</template>

<script>
import BurgerButton from '@/components/buttons/burger-button';

export default {
  name: 'NavHeader',
  components: {
    BurgerButton
  },
  data: () => ({
    isMenuOpen: false
  }),
  methods: {
    changeMenuState() {
      this.$data.isMenuOpen = !this.$data.isMenuOpen;
    }
  }
};
</script>

<style scoped>
@import url('./nav-header.style.css');
@import url('./nav-header.media-style.css');
</style>
