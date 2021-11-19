import { computed } from 'vue';

import { useStore } from 'vuex';

import Chat from './components/chat';

export default {
  name: 'ChatList',
  components: {
    Chat
  },
  setup() {
    const store = useStore();

    const chatList = computed(() => store.state.user.chat.list);
    const isChatListLoading = computed(() => store.state.user.chat.isLoading);

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
