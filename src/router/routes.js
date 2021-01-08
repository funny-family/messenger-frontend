// https://stackoverflow.com/questions/64974795/vue-js-3-component-doesnt-load-in-vuejs-with-router
// https://router.vuejs.org/api/#name

export const notFound = (() => {
  const NotFound = () => import('../views/not-found');

  return {
    name: NotFound.name,
    path: '/404',
    component: NotFound,
    meta: {
      title: 'Page not found!'
    }
  };
})();

export const home = (() => {
  const Home = () => import('../views/home');

  return {
    name: Home.name,
    path: '/',
    component: Home,
    meta: {
      title: 'Home'
    }
  };
})();

export const signin = (() => {
  const SignIn = () => import('../views/sign-in');

  return {
    name: SignIn.name,
    path: '/signin',
    component: SignIn,
    meta: {
      title: 'Sign in'
    }
  };
})();

export const signup = (() => {
  const SignUp = () => import('../views/sign-up');

  return {
    name: SignUp.name,
    path: '/signup',
    component: SignUp,
    meta: {
      title: 'Sign up'
    }
  };
})();

export const my = (() => {
  const My = () => import('../views/my');

  const chats = (() => {
    const Chats = () => import('../views/my/templates/chats');

    return {
      name: Chats.name,
      path: 'chats',
      component: Chats,
      meta: {
        title: 'Chats'
      }
    };
  })();

  const settings = (() => {
    const Settings = () => import('../views/my/templates/settings');

    return {
      name: Settings.name,
      path: 'settings',
      component: Settings,
      meta: {
        title: 'Settings'
      }
    };
  })();

  return {
    name: My.name,
    path: '/my',
    component: My,
    redirect: {
      name: chats.name || settings.name
    },
    children: [
      chats,
      settings
    ]
  };
})();

export const notExisting = (() => ({
  path: '/:catchAll(.*)',
  redirect: {
    name: notFound.name
  }
}))();
