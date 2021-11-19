const path = require('path');

const requiredRoutes = require.context('.', true, /\.(js|ts)$/);
const routes = {};

// prettier-ignore
function fromCabeToCamelCase(str) {
  const arr = str.split('-');
  const capital = arr.map((item, index) => (index ?
    item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() : item.toLowerCase()));
  const capitalString = capital.join('');

  return capitalString;
}

requiredRoutes.keys().forEach((pathToFile) => {
  // Check if not entry router file

  const pathToEntryRouteFiles = `./${path.basename(__filename)}`;
  if (pathToFile === pathToEntryRouteFiles) return;

  /**
   * example:
   * fromCabeToCamelCase(./sign-in.route.js) -> './signIn.route.js'.match(/(?<=.)[\w]+/) -> signIn
   */
  const routeName = fromCabeToCamelCase(pathToFile).match(/(?<=.)[\w]+/)[0];

  routes[routeName] = requiredRoutes(pathToFile).default;
});

export default routes;
