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

    const chat = (() => {
      const ChatWindow = () => import('../views/my/templates/chats/templates/chat-window');

      return {
        name: 'ChatWindow',
        path: 'chat/:id',
        component: ChatWindow
      };
    })();

    return {
      name: Chats.name,
      path: 'chats',
      component: Chats,
      meta: {
        title: 'Chats'
      },
      children: [
        chat
      ]
    };
  })();

  const profile = (() => {
    const Profile = () => import('../views/my/templates/profile');

    return {
      name: Profile.name,
      path: 'profile',
      component: Profile,
      meta: {
        title: 'Profile'
      }
    };
  })();

  return {
    name: My.name,
    path: '/my',
    component: My,
    redirect: {
      name: chats.name || profile.name
    },
    children: [
      chats,
      profile
    ]
  };
})();

export const notExisting = (() => ({
  path: '/:catchAll(.*)',
  redirect: {
    name: notFound.name
  }
}))();
