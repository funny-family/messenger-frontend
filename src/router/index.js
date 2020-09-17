import Vue from 'vue';
import VueRouter from 'vue-router';
// import store from '@/store';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    component: () => import('@/views/Home'),
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/signin',
    component: () => import('@/views/Login'),
    meta: {
      title: 'Sign in',
      requiresAuth: false
    }
  },
  {
    path: '/signup',
    component: () => import('@/views/Registration'),
    meta: {
      title: 'Sign up',
      requiresAuth: false
    }
  },
  {
    path: '/test',
    component: () => import('@/views/Test'),
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
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
