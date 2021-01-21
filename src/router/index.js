import { createRouter, createWebHistory } from 'vue-router';
import { collectExportedRoutes } from './utils';
import * as routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes: collectExportedRoutes(routes)
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export * from 'vue-router';
export {
  router,
  routes
};
