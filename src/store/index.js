import { createStore } from 'vuex';

import modules from './modules';
import plugins from './plugins';

const store = createStore({
  modules,
  plugins
});

export {
  store,
  modules
};
