import { defineAsyncComponent } from 'vue';

import ScrollableMainLayout from '@/components/scrollable-main-layout';
import ScrollbarContainer from '@/components/scrollbar-container';
import LoadingBackground from '../../../../../../components/loading-background';

import ChatWindowNavbar from './components/chat-window-navbar';
// import ChatHistory from './components/chat-history';
import MessageSendingForm from './components/message-sending-form';

import { setup } from './chat-window.setup';

const ChatHistory = defineAsyncComponent({
  loader: () => import('./components/chat-history'),
  loadingComponent: LoadingBackground
});

export default {
  name: 'ChatWindow',
  components: {
    ChatHistory,
    ScrollableMainLayout,
    ScrollbarContainer,
    MessageSendingForm,
    ChatWindowNavbar
  },
  setup
};
