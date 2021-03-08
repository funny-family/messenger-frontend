export default (() => {
  const SignUp = () => import('../../views/sign-up');

  return {
    path: '/signup',
    // name: SignUp.name,
    name: 'SignUp',
    component: SignUp,
    meta: {
      title: 'Sign up'
    }
  };
})();
