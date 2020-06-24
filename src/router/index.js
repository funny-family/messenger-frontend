import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../views/Home')
  },
  {
    path: '/signin',
    component: () => import('../views/Login')
  },
  {
    path: '/signup',
    component: () => import('../views/Registration')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
