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
        'hidden-navbar-menu-on-mobile': isChatSelected
      }"
    />
  </div>
</template>

<script src="./my.module.js"></script>

<style scoped src="./my.styles.css"></style>

<style scoped src="./my.styles.mobile.css"></style>

<style scoped src="./my.styles.desktop.css"></style>

<style scoped lang="scss" src="../../assets/styles/transitions/fade-in-down.scss"></style>
