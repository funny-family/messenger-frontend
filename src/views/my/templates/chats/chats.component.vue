<template>
  <div class="chats-page">
    <ResizableContainer
      class="chats-page__resizable-container"
      resizeX
      :class="{
        'hidden-chat-page-block-on-mobile': isChatSelected
      }"
    >
      <ScrollableMainLayout class="chats-page__chats-navbar">
        <template v-slot:header>
          <ChatHeader />
        </template>

        <template v-slot:main>
          <transition
            name="fade-in-down"
            mode="out-in"
          >
            <ChatList />
          </transition>
        </template>
      </ScrollableMainLayout>
    </ResizableContainer>

    <div
      v-show="isChatSelected"
      class="chats-page__chat-window"
    >
      <router-view v-slot="{ Component }">
        <transition
          name="slide-right"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </div>

    <section
      v-show="!isChatSelected"
      class="
        chats-page__no-chat-selected
        hidden-chat-page-block-on-mobile
      "
    >
      <h2 class="chats-page__no-chat-heading">
        Select chat to start messaging.
      </h2>
    </section>
  </div>
</template>

<script src="./chats.module.js"></script>

<style scoped src="./chats.styles.css"></style>

<style scoped src="./chats.styles.mobile.css"></style>

<style scoped src="./chats.styles.desktop.css"></style>

<style scoped lang="scss" src="../../../../assets/styles/transitions/slide-right.scss"></style>

<style scoped lang="scss" src="../../../../assets/styles/transitions/fade-in-down.scss"></style>
