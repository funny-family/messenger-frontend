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

  modules[moduleName] = requiredModules(pathToFile);
});

export default modules;
