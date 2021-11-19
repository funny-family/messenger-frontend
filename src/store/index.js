import { createStore } from 'vuex';

import { modules } from './modules';
import { plugins } from './plugins';

// eslint-disable-next-line
console.log('modules:', modules);

const strict = true;
const devtools = process.env.NODE_ENV === 'development';

const store = createStore({
  modules,
  plugins,
  strict,
  devtools
});

export {
  store,
  modules
};
