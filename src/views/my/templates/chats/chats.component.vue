<template>
  <div class="chats-page">
    <!-- chats nav panal -->
    <div
      class="resz-container"
      style="height: 100%;"
      :class="{
        'hidden-chat-page-block-on-mobile': isChatSelected
      }"
    >
      <div class="chats-navbar-wrapper">
        <ScrollableMainLayout
          class="chats-page__chats-navbar"
        >
          <template v-slot:header>
            <ChatHeader />
          </template>

          <template v-slot:main>
            <ChatList />
          </template>
        </ScrollableMainLayout>
      </div>
    </div>
    <!-- chats nav panal -->

    <!-- chat window section etc -->
    <div
      class="chats-page__chat-window"
      v-show="isChatSelected"
    >

      <router-view v-slot="{ Component }">
        <transition
          name=""
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </div>

    <section
      class="
        chats-page__chat-window-info
        hidden-chat-page-block-on-mobile
      "
      v-show="!isChatSelected"
    >
      <h2>Selete chat to start messaging.</h2>
    </section>
    <!-- chat window section etc -->
  </div>
</template>

<script src="./chats.module.js"></script>

<style scoped src="./chats.styles.css"></style>
<style scoped src="./chats.modile.styles.css"></style>
<style scoped src="./chats.desktop.styles.css"></style>
