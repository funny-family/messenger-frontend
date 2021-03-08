export default (() => {
  const My = () => import('../../views/my');

  const chats = (() => {
    const Chats = () => import('../../views/my/templates/chats');

    const chat = (() => {
      const ChatWindow = () => import('../../views/my/templates/chats/templates/chat-window');

      return {
        path: 'chat/:id',
        // name: ChatWindow.name,
        name: 'ChatWindow',
        component: ChatWindow
      };
    })();

    return {
      path: 'chats',
      // name: Chats.name,
      name: 'Chats',
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
    const Profile = () => import('../../views/my/templates/profile');

    return {
      path: 'profile',
      // name: Profile.name,
      name: 'Profile',
      component: Profile,
      meta: {
        title: 'Profile'
      }
    };
  })();

  return {
    path: '/my',
    // name: My.name,
    name: 'My',
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
