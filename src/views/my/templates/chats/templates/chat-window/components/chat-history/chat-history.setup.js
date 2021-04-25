import { computed } from 'vue';

import { useStore } from 'vuex';

import { useRouter } from 'vue-router';

export function setup() {
  const { state } = useStore();
  const router = useRouter();

  const chatList = computed(() => state.chats.list);
  const currentSelectedChatData = computed(() => chatList.value.find(
    (chat) => {
      const chatId = chat.id;
      const currentChatRouteId = router.currentRoute.value.params.id;
      const chatData = chatId === currentChatRouteId;

      return chatData;
    }
  ));

  return {
    currentSelectedChatData
  };
}
