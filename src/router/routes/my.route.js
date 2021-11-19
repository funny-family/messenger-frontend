export default (() => {
  const chats = (() => {
    const chat = (() => {
      const chatRoute = {
        // path: 'chat/:id',
        path: ':id',
        name: 'ChatWindow',
        component: () => import('../../views/my/templates/chats/templates/chat-window')
      };

      return chatRoute;
    })();

    const chatsRoute = {
      path: 'chats',
      name: 'Chats',
      component: () => import('../../views/my/templates/chats'),
      meta: {
        title: 'Chats'
      },
      children: [
        chat
      ]
    };

    return chatsRoute;
  })();

  const profile = (() => {
    const profileRoute = {
      path: 'profile',
      name: 'Profile',
      component: () => import('../../views/my/templates/profile'),
      meta: {
        title: 'Profile'
      }
    };

    return profileRoute;
  })();

  const myRoute = {
    path: '/my',
    name: 'My',
    component: () => import('../../views/my'),
    redirect: {
      name: chats.name || profile.name
    },
    children: [
      chats,
      profile
    ]
  };

  return myRoute;
})();
