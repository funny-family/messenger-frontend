import { my } from './store';

import NavbarMenu from './components/navbar-menu';

export default {
  name: 'My',
  components: {
    NavbarMenu
  },
  setup() {
    const { isChatSelected } = my.state;

    return {
      isChatSelected
    };
  }
};
