import { createStore, createLogger } from 'vuex';
import modules from './modules';

const productionPlugins = [];
const developmentPlugins = [
  createLogger()
];

const plugins = process.env.NODE_ENV === 'production' ?
  [...developmentPlugins, ...productionPlugins] :
  [...productionPlugins];

const store = createStore({
  modules,
  plugins
});

export default store;
