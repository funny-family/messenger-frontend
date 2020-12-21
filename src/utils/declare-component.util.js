import Vue from './vue.util';

export const declareComponent = (componentName, component) => Vue.component(
  componentName, component
);
