import { routes } from '@/router';

export default {
  name: 'ChatWindowNavbar',
  setup() {
    const chatsRoute = routes.my.children[0].name;

    return {
      chatsRoute
    };
  }
};
