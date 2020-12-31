// https://stackoverflow.com/questions/64974795/vue-js-3-component-doesnt-load-in-vuejs-with-router

const routes = [
  {
    path: '/:catchAll(.*)',
    redirect: {
      name: 'NotFound'
    }
  },
  {
    name: 'NotFound',
    path: '/404',
    component: () => import('../views/not-found'),
    meta: {
      title: 'Page not found!'
    }
  },
  {
    name: 'Home',
    path: '/',
    component: () => import('../views/home'),
    meta: {
      title: 'Home'
    }
  }
];

export default routes;
