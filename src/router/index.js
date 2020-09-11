import Vue from 'vue';
import VueRouter from 'vue-router';
// import store from '@/store';

Vue.use(VueRouter);

// const loggedInUser = store.state.auth.isUserLoggedIn;

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
    component: () => import('@/views/Test')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
