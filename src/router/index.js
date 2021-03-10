import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes: Object.values(routes)
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export { router, routes };
