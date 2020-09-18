import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from '../store';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeResolve((to, from, next) => {
  const isCurrentUserLoggedIn = store.state.auth.isUserLoggedIn;
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
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
