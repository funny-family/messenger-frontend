/*
  https://webpack.js.org/guides/dependency-management/#requirecontext
  match only index.js or index.ts files
*/
const requiredModules = require.context('.', true, /index\.(js|ts)/);
const modules = {};

function fromCabeToCamelCase(str) {
  const arr = str.split('-');
  const capital = arr.map((item, index) => (index ?
    item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() : item.toLowerCase()));
  const capitalString = capital.join('');

  return capitalString;
}

requiredModules.keys().forEach((pathToFile) => {
  // Don't register this file as a Vuex module!
  if (pathToFile === './index.js') return;

  const moduleName = fromCabeToCamelCase(
    pathToFile.split('/')[2]
  );

  // all modules connecting ends here!
  modules[moduleName] = requiredModules(pathToFile).default;

  // add namespaced filed to make module
  modules[moduleName].namespaced = true;

  // add additional "data" value to "moduleName" object
  const additionalField = 'data';
  modules[moduleName][additionalField] = {};
  modules[moduleName][additionalField].moduleName = moduleName;

  // create "names" object inside "data"
  modules[moduleName][additionalField].names = {};
  modules[moduleName][additionalField].names.actions = {};
  modules[moduleName][additionalField].names.mutations = {};

  // "names" object contain "actions" and "mutations"
  const actionsNames = modules[moduleName][additionalField].names.actions;
  const mutationsNames = modules[moduleName][additionalField].names.mutations;

  // extract all actions and mutations functions from module object
  const { actions } = modules[moduleName];
  const { mutations } = modules[moduleName];

  // fill in "names.actions" and "name.mutations" objects
  // eslint-disable-next-line
  for (const action of Object.values(actions)) {
    actionsNames[action.name] = action.name;
  }

  // eslint-disable-next-line
  for (const mutation of Object.values(mutations)) {
    mutationsNames[mutation.name] = mutation.name;
  }
});

export default modules;
