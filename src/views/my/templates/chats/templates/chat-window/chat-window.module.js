import { defineAsyncComponent } from 'vue';

import ScrollableMainLayout from '@/components/scrollable-main-layout';

import ChatWindowNavbar from './components/chat-window-navbar';
// import ChatHistory from './components/chat-history';
import MessageSendingForm from './components/message-sending-form';

import { setup } from './chat-window.setup';

const ChatHistory = defineAsyncComponent({
  loader: () => import('./components/chat-history'),
  loadingComponent: null
});

export default {
  name: 'ChatWindow',
  components: {
    ChatHistory,
    ScrollableMainLayout,
    MessageSendingForm,
    ChatWindowNavbar
  },
  setup
};
