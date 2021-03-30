export default (() => {
  const notFoundRoute = {
    path: '/404',
    name: 'NotFound',
    component: () => import('../../views/not-found'),
    meta: {
      title: 'Page not found!'
    }
  };

  return notFoundRoute;
})();
