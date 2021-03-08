export default (() => {
  const NotFound = () => import('../../views/not-found');

  return {
    path: '/404',
    // name: NotFound.name,
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: 'Page not found!'
    }
  };
})();
