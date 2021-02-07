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

<script src="./my.module.js"></script>

<style scoped src="./my.styles.css"></style>
<style scoped src="./my.moobile.styles.css"></style>
<style scoped src="./my.desktop.styles.css"></style>
<style scoped src="../../assets/styles/transitions/fade-in-down.css"></style>
