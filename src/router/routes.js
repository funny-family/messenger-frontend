// https://stackoverflow.com/questions/64974795/vue-js-3-component-doesnt-load-in-vuejs-with-router

const notFoundPage = {
  name: 'NotFound',
  path: '/404',
  component: () => import('../views/not-found'),
  meta: {
    title: 'Page not found!'
  }
};

const homePage = {
  name: 'Home',
  path: '/',
  component: () => import('../views/home'),
  meta: {
    title: 'Home'
  }
};

const notExisting = {
  path: '/:catchAll(.*)',
  redirect: {
    name: notFoundPage.name
  }
};

const routes = [
  notExisting,
  notFoundPage,
  homePage
];

export default routes;
