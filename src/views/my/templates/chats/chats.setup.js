import {
  watchEffect, computed
} from 'vue';

import { useRouter } from 'vue-router';
import { router as r } from '@/router';

import { useStore } from 'vuex';
import { modules } from '@/store';

import { my } from '../../store';

const { chats } = modules;

export function setup() {
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
  // console.log(12123, navigator);
  return {
    isChatSelected
  };
}
