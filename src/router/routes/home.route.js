export default (() => {
  const homeRoute = {
    path: '/',
    name: 'Home',
    component: () => import('../../views/home'),
    meta: {
      title: 'Home'
    }
  };

  return homeRoute;
})();
