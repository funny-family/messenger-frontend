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
    path: '/im',
    component: () => import('@/views/Im'),
    meta: {
      title: 'Profile',
      requiresAuth: true
    }
  },
  {
    path: '/signin',
    component: () => import('@/views/Login'),
    meta: {
      title: 'Sign in'
    }
  },
  {
    path: '/signup',
    component: () => import('@/views/Registration'),
    meta: {
      title: 'Sign up'
    }
  },
  {
    path: '/test',
    component: () => import('@/views/Test')
  }
];

export default routes;
