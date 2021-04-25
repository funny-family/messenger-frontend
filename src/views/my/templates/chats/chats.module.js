import {
  defineAsyncComponent, watchEffect, computed
} from 'vue';

import { useRouter } from 'vue-router';
import { router as r } from '@/router';

import { useStore } from 'vuex';
import { modules } from '@/store';

import ScrollableMainLayout from '@/components/scrollable-main-layout';
import ChatHeader from './components/chat-header';
// import ChatList from './components/chat-list';
import ChatListLoadingScreen from './components/chat-list-loading-screen';

import { my } from '../../store';

const { chats } = modules;

const ChatList = defineAsyncComponent({
  loader: () => import('./components/chat-list'),
  loadingComponent: ChatListLoadingScreen
});

export default {
  name: 'Chats',
  components: {
    ScrollableMainLayout,
    ChatHeader,
    ChatList
  },
  setup() {
    const router = useRouter();

    const { state, dispatch } = useStore();

    dispatch(`${chats.data.moduleName}/${chats.data.names.actions.fetchThem}`);

    const currentChatRouteId = computed(() => router.currentRoute.value.params.id);
    const chatRouteIdList = computed(() => state.chats.list.map((chat) => chat.id));
    const chatsRouteName = r.getRoutes()[1].name;

    watchEffect((onInvalidate) => {
      const isCurrentChatRouteValid = chatRouteIdList.value.includes(currentChatRouteId.value);

      if (!isCurrentChatRouteValid && currentChatRouteId.value) {
        router.push({ name: chatsRouteName });
      }

      if (currentChatRouteId.value) {
        my.actions.setChatSelection();
      }

      onInvalidate(() => {
        my.actions.unsetChatSelection();
      });
    });

    const { isChatSelected } = my.state;
    console.log(12123, navigator);
    return {
      isChatSelected
    };
  }
};
