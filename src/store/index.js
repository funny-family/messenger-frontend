import { createStore, createLogger } from 'vuex';
import modules from './modules';

const plugins = [process.env.NODE_ENV === 'development' ? createLogger() : ''];

const store = createStore({
  modules,
  plugins
});

export {
  store,
  modules
};
