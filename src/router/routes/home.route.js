export default (() => {
  const Home = () => import('../../views/home');

  return {
    path: '/',
    // name: Home.name,
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  };
})();
