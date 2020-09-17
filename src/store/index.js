import Vue from 'vue';
import Vuex from 'vuex';
import { sync } from 'vuex-router-sync';
import router from '../router';


import auth from './modules/auth';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth
  }
});

sync(store, router);

export default store;
