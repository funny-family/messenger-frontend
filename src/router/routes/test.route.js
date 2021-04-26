export default (() => {
  const testRoute = {
    path: '/test',
    name: 'Test',
    component: () => import('../../views/test'),
    meta: {
      title: 'Testing things in here!'
    },
    beforeEnter(from, to, next) {
      if (process.env.NODE_ENV !== 'development') {
        next({ name: 'Home' });
      }

      next();
    }
  };

  return testRoute;
})();
