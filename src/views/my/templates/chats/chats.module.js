import { defineAsyncComponent } from 'vue';
import { my } from '../../store';

import ScrollableMainLayout from '../../../../components/scrollable-main-layout';

import ChatHeader from './components/chat-header';

const ChatList = defineAsyncComponent({
  loader: () => import('./components/chat-list')
});

export default {
  name: 'Chats',
  components: {
    ScrollableMainLayout,
    ChatHeader,
    ChatList
  },
  setup() {
    const { isChatSelected } = my.state;

    return {
      isChatSelected
    };
  }
};
