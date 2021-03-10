export default (() => {
  const signInRoute = {
    path: '/signin',
    name: 'SignIn',
    component: () => import('../../views/sign-in'),
    meta: {
      title: 'Sign in'
    }
  };

  return signInRoute;
})();
