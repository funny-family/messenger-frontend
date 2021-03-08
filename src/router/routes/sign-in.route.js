export default (() => {
  const SignIn = () => import('../../views/sign-in');

  return {
    path: '/signin',
    // name: SignIn.name,
    name: 'SignIn',
    component: SignIn,
    meta: {
      title: 'Sign in'
    }
  };
})();
