import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import router from './router';
import store from './store';
import App from './App.vue';

Vue.config.productionTip = false;

// store.dispatch('keepUserAthenticated');
// store.dispatch(''); // [vuex] unknown action type:

// https://ssr.vuejs.org/guide/data.html#data-store YAY!!!!
// store.subscribe((mutation, state) => {
//   // do {
//   // } while (mutation.type === 'SET_AUTHENTICATION');
//   // state.auth.isUserLoggedIn = true;
//   console.log('mutation:', mutation);
//   console.log('state:', state);
//   // if (state.auth.isUserLoggedIn === true) {
//   //   store.dispatch('checkAuth');
//   // }
// }, { prepend: true });

// https://www.youtube.com/watch?v=DbhnnDjre_Y
// store.subscribeAction((action, state) => {
//   // if (state.auth.isUserLoggedIn === true) {
//   //   store.dispatch('checkAuth');
//   // }
//   console.log(action);
//   console.log(state);
// }, { prepend: true });

// store.watch((state) => {
//   // if (state.auth.isUserLoggedIn === true) {
//   //   store.dispatch('checkAuth');
//   // }
//   console.log(state);
// });

// store.dispatch('keepUserAuthenticated');

sync(store, router);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
