const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    component: () => import('@/views/Home'),
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/signin',
    component: () => import('@/views/Login'),
    meta: {
      title: 'Sign in',
      requiresAuth: false
    }
  },
  {
    path: '/signup',
    component: () => import('@/views/Registration'),
    meta: {
      title: 'Sign up',
      requiresAuth: false
    }
  },
  {
    path: '/test',
    component: () => import('@/views/Test'),
    meta: {
      requiresAuth: true
    }
  }
];

export default routes;
