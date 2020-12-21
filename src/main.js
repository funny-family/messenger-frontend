import { sync } from 'vuex-router-sync';
import router from './router';
import store from './store';
import App from './App.vue';

import { createApp } from './utils';

store.dispatch('keepUserAuthenticated');
sync(store, router);

const app = createApp({
  router,
  store,
  render: (h) => h(App)
});

app.$mount('#app');
