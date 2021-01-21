<template>
  <main class="chats-section">
    <NavHeader />
    <ChatList />
  </main>
</template>

<script>
import NavHeader from './components/nav-header';
import ChatList from './components/chat-list';

export default {
  name: 'Chats',
  components: {
    NavHeader,
    ChatList
  }
};
</script>

<style scoped>
@import url('./chats.style.css');
</style>
