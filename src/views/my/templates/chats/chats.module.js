import { defineAsyncComponent } from 'vue';
import { my } from '../../store';

import ChatHeader from './components/chat-header';

const ChatList = defineAsyncComponent({
  loader: () => import('./components/chat-list')
});

export default {
  name: 'Chats',
  components: {
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
