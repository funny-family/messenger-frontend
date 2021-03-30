import NavHeader from './components/nav-header';
import NavFooter from './components/nav-footer';
import { isNavMenuOpen } from './components/nav-header/nav-header.state';

export default {
  name: 'Home',
  components: {
    NavHeader,
    NavFooter
  },
  setup() {
    return {
      isNavMenuOpen
    };
  }
};
