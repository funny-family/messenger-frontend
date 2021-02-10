import { useStore } from '@/store';
import {
  computed, ref, onMounted
} from 'vue';

import Chat from './components/chat';

export default {
  name: 'ChatList',
  components: {
    Chat
  },
  setup() {
    const { state } = useStore();

    const chatList = computed(() => state.chats.list);

    const isAllChatsLoaded = ref(false);
    onMounted(() => {
      isAllChatsLoaded.value = true;
    });

    return {
      isAllChatsLoaded,
      chatList
    };
  }
};
