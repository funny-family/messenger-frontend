<template>
  <div class="chat-window">
    <ChatWidnowHeader class="chat-window__header" />

    <main class="chat-window__main">
      <section class="section">
        <div v-for="i in 100" :key="i">
          {{ i }}
        </div>
      </section>
    </main>

    <footer class="chat-window__message-input-block">
      <input type="text" />
    </footer>
  </div>
</template>

<script>
import ChatWidnowHeader from './components/chat-widnow-header';

export default {
  name: 'ChatWindow',
  components: {
    ChatWidnowHeader
  }
};
</script>

<style scoped src="./chat-window.styles.css"></style>
<style scoped src="./chat-window.mobile.styles.css"></style>
<style scoped src="./chat-window.desktop.styles.css"></style>
