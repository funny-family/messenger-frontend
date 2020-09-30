import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import router from './router';
import store from './store';
import App from './App.vue';

Vue.config.productionTip = false;

// store.dispatch('keepUserAthenticated');
// store.dispatch(''); // [vuex] unknown action type:

// store.subscribe((mutation, state) => {
//   // state.auth.isUserLoggedIn = true;
//   console.log('mutation:', mutation);
//   console.log('state:', state);
// });

store.subscribeAction((action, state) => {
  console.log(action);
  console.log(state);
});

sync(store, router);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
