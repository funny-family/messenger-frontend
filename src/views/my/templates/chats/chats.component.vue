<template>
  <div class="chats-page">
    <nav
      class="chats-page__chats-navbar"
      :class="{
        'hidden-chat-page-block-on-mobile': isChatSelected
      }"
    >
      <ChatHeader class="chats-page__chat-header" />
      <ChatList class="chats-page__chat-list" />
    </nav>

    <main
      class="chats-page__chat-window"
      v-show="isChatSelected"
    >

      <router-view v-slot="{ Component }">
        <transition
          name=""
          mode="out-in"
        >
          <!-- <keep-alive> -->
            <component :is="Component" />
          <!-- </keep-alive> -->
        </transition>
      </router-view>
    </main>

    <section
      class="
        chats-page__chat-window-info
        hidden-chat-page-block-on-mobile
      "
      v-show="!isChatSelected"
    >
      <h2>Selete chat to start messaging.</h2>
    </section>
  </div>
</template>

<script src="./chats.module.js"></script>

<style scoped src="./chats.styles.css"></style>
<style scoped src="./chats.modile.styles.css"></style>
<style scoped src="./chats.desktop.styles.css"></style>
