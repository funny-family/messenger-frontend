import Vue from 'vue';
import VueRouter from 'vue-router';
// import { sync } from 'vuex-router-sync';
import routes from './routes';
import store from '../store';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// sync(store, router);
// console.log('store.state', store.state.route);

router.afterEach(async (to, from, next) => {
  const isCurrentUserLoggedIn = await store.state.auth.isUserLoggedIn;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  console.log('isCurrentUserLoggedIn:', isCurrentUserLoggedIn);
  console.log('requiresAuth:', requiresAuth);
  console.log(store.state.auth);

  if (requiresAuth) {
    if (!isCurrentUserLoggedIn) {
      next('/signin');
    } else {
      next();
    }
  } else {
    next();
  }
  setTimeout(() => {
    // let isCurrentUserLoggedIn;
    // setTimeout(() => {
    //   isCurrentUserLoggedIn = store.state.auth.isUserLoggedIn;
    // }, 0);
    // if (requiresAuth && !isCurrentUserLoggedIn) next('/signin');
    // else if (!requiresAuth && isCurrentUserLoggedIn) next('/');
    // else next();
  }, 1000);
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
