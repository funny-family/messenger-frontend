/* eslint-disable no-unused-vars */

const path = require('path');

const { fromCabeToCamelCase } = require('../../utils/from-cabe-to-camel-case.util');
const { assignToObject } = require('../../utils/assign-to-object.util');

/*
  https://webpack.js.org/guides/dependency-management/#requirecontext
  match only index.js or index.ts files
*/

// eslint-disable-next-line
// const requiredModule = require.context('.', true, /\b[a-z]+(-[a-z]+)*\b.\module\.(js|ts)/);
// eslint-disable-next-line
const requiredModule = require.context('.', true, /\b[a-z]+(-[a-z]+)*\b.\module\.(js|ts)/);
// // eslint-disable-next-line
// const requiredModule = require.context('.', true, /index\.(js|ts)/);

const separator = '/';

const foundModules = {};

requiredModule.keys().forEach((pathToModuleFile) => {
  const currentFileName = `./${path.basename(__filename)}`;
  if (pathToModuleFile === currentFileName) return;

  /**
   * @type {string}
   */
  const moduleName = pathToModuleFile
    .split(separator)
    .filter((objectKey) => !(/\./g).test(objectKey))
    .map((objectKey) => fromCabeToCamelCase(objectKey))
    .join(separator);
  const moduleValue = requiredModule(pathToModuleFile).default;

  // console.log(1231312, moduleName.split(separator).filter((name) => name !== 'modules'));
  // console.log(moduleName, moduleValue);

  foundModules[moduleName] = moduleValue;

  /**
   * Namespacing.
   * @see https://vuex.vuejs.org/guide/modules.html#namespacing
   */
  foundModules[moduleName].namespaced = true;
});

const sortedModulesFromShortToLongKey = Object.fromEntries(
  Object
    .entries(foundModules)
    .sort((a, b) => {
      const sortFromShortModuleNameToLong =
      a[0].split(separator).length - b[0].split(separator).length;

      return sortFromShortModuleNameToLong;
    })
);

console.log('foundModules:', foundModules);
console.log('sortedModulesFromShortToLongKey:', sortedModulesFromShortToLongKey);

const filteredModulesWithShortKey = Object.fromEntries(
  Object
    .entries(sortedModulesFromShortToLongKey)
    .filter(([moduleKey, moduleValue]) => {
      const allSortedModulesWithShortKey = moduleKey.split(separator).length === 1;

      return allSortedModulesWithShortKey;
    })
);

const filteredModulesWithLongKey = Object.fromEntries(
  Object
    .entries(sortedModulesFromShortToLongKey)
    .filter(([moduleKey, moduleValue]) => {
      const allSortedModulesWithLongKey = moduleKey.split(separator).length !== 1;

      return allSortedModulesWithLongKey;
    })
);

export const modules = { ...filteredModulesWithShortKey };

// eslint-disable-next-line
for (const moduleKey in filteredModulesWithLongKey) {
  // eslint-disable-next-line
  if (!filteredModulesWithLongKey.hasOwnProperty(moduleKey)) {
    // eslint-disable-next-line
    continue;
  }

  const moduleValue = filteredModulesWithLongKey[moduleKey];
  // console.log('moduleValue:', moduleValue);
  // console.log(moduleKey, moduleValue);
  assignToObject(modules, moduleKey.split(separator), moduleValue);
}
