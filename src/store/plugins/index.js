import { createLogger } from 'vuex';

class PluginsDefiner {
  /**
   * @param {string} mode
   * @param {array} plugins
   */
  constructor({ mode = '', plugins = [] }) {
    this.mode = mode;
    this.plugins = plugins;

    if (typeof this.mode !== 'string') {
      throw new TypeError('Mode should be a string value!');
    }

    if (this.mode === 'production') {
      this.plugins = [];
    }

    return this.plugins;
  }

  getAll() {
    return this.plugins;
  }
}

const constantlyUsedPlugins = new PluginsDefiner({
  plugins: []
});

const developmentPlugins = new PluginsDefiner({
  mode: process.env.NODE_ENV,
  plugins: [createLogger()]
});

const plugins = [...constantlyUsedPlugins, ...developmentPlugins];

export default plugins;
