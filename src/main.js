import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import router from './router';
import store from './store';
import App from './App.vue';

Vue.config.productionTip = false;

store.dispatch('checkAuth');

sync(store, router);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
