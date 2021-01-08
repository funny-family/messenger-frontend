<template>
  <div class="my-page">
    <main class="my-page__main">
      <router-view v-slot="myRouterView">
        <transition
          name="fade-in-down"
          mode="out-in"
        >
          <keep-alive>
            <component :is="myRouterView.Component" />
          </keep-alive>
        </transition>
      </router-view>
    </main>

    <NavbarMenu class="my-page__menu" />
  </div>
</template>

<script>
import NavbarMenu from './components/navbar-menu';

export default {
  name: 'My',
  components: {
    NavbarMenu
  }
};
</script>

<style scoped>
@import url('./my.style.css');
@import url('../../assets/styles/transitions/fade-in-down.css');
</style>
