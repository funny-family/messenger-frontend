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

<style scoped src="./my.styles.css"></style>
<style scoped src="./my.moobile.styles.css"></style>
<style scoped src="./my.desktop.styles.css"></style>
<style scoped src="../../assets/styles/transitions/fade-in-down.css"></style>
