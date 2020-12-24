const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    name: 'Home',
    path: '/',
    component: () => import('../views/home/'),
    meta: {
      title: 'Home'
    }
  },
  {
    name: 'Profile',
    path: '/im',
    component: () => import('../views/Im.vue'),
    meta: {
      title: 'Profile',
      requiresAuth: true
    }
  },
  {
    name: 'SignIn',
    path: '/signin',
    component: () => import('../views/Login.vue'),
    meta: {
      title: 'Sign in',
      guest: true
    }
  },
  {
    name: 'SignUp',
    path: '/signup',
    component: () => import('../views/Registration.vue'),
    meta: {
      title: 'Sign up',
      guest: true
    }
  },
  {
    name: 'Test',
    path: '/test',
    component: () => import('@/views/Test')
  }
];

export default routes;
