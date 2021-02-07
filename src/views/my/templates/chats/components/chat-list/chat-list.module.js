import { useStore, modules } from '@/store';
import { computed, defineAsyncComponent } from 'vue';

const Chat = defineAsyncComponent({
  loader: () => import('./components/chat')
});

const { chats } = modules;

export default {
  name: 'ChatList',
  components: {
    Chat
  },
  setup() {
    const { state, dispatch } = useStore();

    dispatch(`${chats.data.moduleName}/${chats.data.names.actions.fetchThem}`);
    const chatList = computed(() => state.chats.list);

    return {
      chatList
    };
  }
};
