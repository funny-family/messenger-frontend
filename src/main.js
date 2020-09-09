import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

if (store.state.auth.isUserLoggedIn === true) {
  store.dispatch('checkAuth');
}

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
