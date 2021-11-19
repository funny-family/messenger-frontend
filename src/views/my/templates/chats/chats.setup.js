import {
  watchEffect, computed, watch
} from 'vue';

import { useTitle } from '@vueuse/core';

import { useRouter } from 'vue-router';
import { router as r } from '@/router';

import { useStore } from 'vuex';
// import { modules } from '../../../../store';

import { my } from '../../store';

export const setup = () => {
  const router = useRouter();
  const store = useStore();

  store.dispatch('user/chat/fetchThem');
  // store.dispatch();

  // console.log(1111, store.state.user.chat.list);
  const chatsRouteName = r.getRoutes()[1].name;
  const currentRouteId = computed(() => router.currentRoute.value.params.id);
  const availableRouteIds = computed(() => store.state.user.chat.list.map((chat) => chat.id));

  watchEffect((onInvalidate) => {
    const doesCurrentRouteExist = availableRouteIds.value.includes(currentRouteId.value);
    if (!doesCurrentRouteExist && currentRouteId.value) {
      router.push({ name: chatsRouteName });
    }

    if (currentRouteId.value) {
      my.actions.setChatSelection();
    }

    onInvalidate(() => {
      my.actions.unsetChatSelection();
    });
  });

  const currentChatData = computed(
    () => store.state.user.chat.list.find((chat) => chat.id === currentRouteId.value)
  );

  watch(
    currentRouteId,
    () => useTitle(currentChatData.value?.name)
  );

  const { isChatSelected } = my.state;

  return {
    isChatSelected
  };
};
