import Vue from 'vue';
import VueRouter from 'vue-router';
// import store from '@/store';

Vue.use(VueRouter);

// const loggedInState = store.state.auth.isUserLoggedIn;
// console.log(loggedInState);

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    component: () => import('@/views/Home')
  },
  {
    path: '/signin',
    component: () => import('@/views/Login')
  },
  {
    path: '/signup',
    component: () => import('@/views/Registration')
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

export default router;
