<template>
  <div class="my-page">
    <main class="my-page__main">
      <router-view v-slot="{ Component }">
        <transition
          name="fade-in-down"
          mode="out-in"
        >
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </main>

    <NavbarMenu
      class="my-page__menu"
      :class="{
        'hidden-navbar-menu': isChatSelected
      }"
    />
  </div>
</template>

<script>
import { useRoute } from '@/router';
import { watchEffect } from 'vue';

import { my } from './store';

import NavbarMenu from './components/navbar-menu';

export default {
  name: 'My',
  components: {
    NavbarMenu
  },
  setup() {
    const route = useRoute();
    const { isChatSelected } = my.state;

    watchEffect((onInvalidate) => {
      if (route.params.id) {
        my.actions.changeIsChatSelectedValue(true);
      }

      onInvalidate(() => {
        my.actions.changeIsChatSelectedValue(false);
      });
    });

    return {
      isChatSelected
    };
  }
};
</script>

<style scoped src="./my.styles.css"></style>
<style scoped src="./my.moobile.styles.css"></style>
<style scoped src="./my.desktop.styles.css"></style>
<style scoped src="../../assets/styles/transitions/fade-in-down.css"></style>
