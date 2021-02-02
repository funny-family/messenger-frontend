<template>
  <section class="chat-list">
    <Chat
      v-for="chat in chatList"
      :key="chat.id"
      :id="`${chat.id}`"
      :avatar="chat.name[0]"
      :name="chat.username"
      :nameOfTheMessageSender="chat.address.city"
      :message="chat.company.catchPhrase"
      :timeOfLastMeaasge="Math.floor(Math.random() * 100)"
      :unreadMessages="Math.floor(Math.random() * 10)"
    />
  </section>
</template>

<script>
import { useStore, modules } from '@/store';
import { computed } from 'vue';

import Chat from './components/chat';

const { chats } = modules;

export default {
  name: 'ChatList',
  components: {
    Chat
  },
  setup() {
    const { state, dispatch } = useStore();

    dispatch(`${chats.data.moduleName}/${chats.data.names.actions.fetchThem}`);
    const chatList = computed(() => state.chats.list);

    return {
      chatList
    };
  }
};
</script>

<style scoped>
@import url('./chat-list.style.css');
</style>
