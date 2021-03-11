<template>
  <header class="nav-header">
    <h2 class="nav-header__logo">Chatus</h2>
    <nav
      class="nav-header__list-container"
      :class="{
        'nav-header__list-container__showed': isNavMenuOpen
      }"
    >
      <ul class="nav-header__list">
        <li class="nav-header__item">
          <router-link :to="{ name: router.getRoutes()[6].name }">Sign in</router-link>
        </li>
        <li class="nav-header__item">
          <router-link :to="{ name: router.getRoutes()[7].name }">Sign up</router-link>
        </li>
      </ul>
    </nav>
    <BurgerButton class="nav-header__burger-button" @onClick="changeMenuState" />
  </header>
</template>

<script>
import BurgerButton from '@/components/burger-button';
import { isNavMenuOpen } from './nav-header.state';

import { router } from '../../../../router';

const emitEnum = {
  changeMenuState: 'changeMenuState'
};

export default {
  name: 'NavHeader',
  components: {
    BurgerButton
  },
  emits: [emitEnum.changeMenuState],
  setup() {
    function changeMenuState(state) {
      isNavMenuOpen.value = state;
    }

    return {
      router,
      isNavMenuOpen,
      changeMenuState
    };
  }
};
</script>

<style scoped src="./nav-header.styles.css"></style>
<style scoped src="./nav-header.media.styles.css"></style>
