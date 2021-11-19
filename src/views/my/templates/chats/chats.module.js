import { defineAsyncComponent } from 'vue';

import ScrollableMainLayout from '@/components/scrollable-main-layout';
import ResizableContainer from '@/components/resizable-container';
import ScrollbarContainer from '@/components/scrollbar-container';

import ChatHeader from './components/chat-header';
// import ChatList from './components/chat-list';
import ChatListLoadingScreen from './components/chat-list-loading-screen';

import { setup } from './chats.setup';

const ChatList = defineAsyncComponent({
  loader: () => import('./components/chat-list'),
  loadingComponent: ChatListLoadingScreen
});

export default {
  name: 'Chats',
  components: {
    ScrollbarContainer,
    ResizableContainer,
    ScrollableMainLayout,
    ChatHeader,
    ChatList
  },
  setup
};
