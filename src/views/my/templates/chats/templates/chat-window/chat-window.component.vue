<template>
  <div class="chat-window">
    <ChatWindowNavbar class="chat-window__navbar" />

    <main class="chat-window__main">
      <section class="section">
        <div v-for="i in 100" :key="i">
          {{ i }}
        </div>
      </section>
    </main>

    <ChatWindowInput class="chat-window__input-block"/>
  </div>
</template>

<script src="./chat-window.module.js"></script>

<style scoped src="./chat-window.styles.css"></style>
<style scoped src="./chat-window.mobile.styles.css"></style>
<style scoped src="./chat-window.desktop.styles.css"></style>
