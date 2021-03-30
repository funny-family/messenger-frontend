export default (() => {
  const signUpRoute = {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../../views/sign-up'),
    meta: {
      title: 'Sign up'
    }
  };

  return signUpRoute;
})();
