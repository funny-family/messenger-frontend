import { computed } from 'vue';

import { useStore } from 'vuex';

import Chat from './components/chat';

export default {
  name: 'ChatList',
  components: {
    Chat
  },
  setup() {
    const { state } = useStore();

    const chatList = computed(() => state.chats.list);
    const isChatListLoading = computed(() => state.chats.isLoading);

    function createRandomDate(start, end) {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    return {
      createRandomDate,
      isChatListLoading,
      chatList
    };
  }
};
