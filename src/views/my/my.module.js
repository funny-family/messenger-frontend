import { useRoute } from 'vue-router';
import { watchEffect } from 'vue';

import { my } from './store';

import NavbarMenu from './components/navbar-menu';

export default {
  name: 'My',
  components: {
    NavbarMenu
  },
  setup() {
    const route = useRoute();
    const { isChatSelected } = my.state;

    watchEffect((onInvalidate) => {
      if (route.params.id) {
        my.actions.setChatSelection();
      }

      onInvalidate(() => {
        my.actions.unsetChatSelection();
      });
    });

    return {
      isChatSelected
    };
  }
};
