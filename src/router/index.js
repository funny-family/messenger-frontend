import { createRouter, createWebHistory } from 'vue-router';
/* replace it later with './routes' */
import routes from './routes/index';

const router = createRouter({
  history: createWebHistory(),
  routes: Object.values(routes)
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

// eslint-disable-next-line
console.table(router.getRoutes());

export { router, routes };
