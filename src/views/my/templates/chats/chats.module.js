import { defineAsyncComponent, computed } from 'vue';

import { modules, useStore } from '@/store';
import { my } from '../../store';

import ScrollableMainLayout from '../../../../components/scrollable-main-layout';
import ChatHeader from './components/chat-header';
import ChatListLoadingScreen from './components/chat-list-loading-screen';

const ChatList = defineAsyncComponent({
  loader: () => import('./components/chat-list'),
  loadingComponent: ChatListLoadingScreen
});

const { chats } = modules;

export default {
  name: 'Chats',
  components: {
    ScrollableMainLayout,
    ChatHeader,
    ChatListLoadingScreen,
    ChatList
  },
  setup() {
    const { isChatSelected } = my.state;

    const { state, dispatch } = useStore();
    const chatListLength = computed(() => state.chats.list.length);
    dispatch(`${chats.data.moduleName}/${chats.data.names.actions.fetchThem}`);

    return {
      chatListLength,
      isChatSelected
    };
  }
};
