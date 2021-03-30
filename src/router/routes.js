const requiredRoutes = require.context('./routes/', true, /\.(js|ts)$/);
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
  if (pathToFile === './index.js') return;

  /**
   * example:
   * fromCabeToCamelCase(./sign-in.route.js) -> './signIn.route.js'.match(/(?<=.)[\w]+/) -> signIn
   */
  const routeName = fromCabeToCamelCase(pathToFile).match(/(?<=.)[\w]+/)[0];

  routes[routeName] = requiredRoutes(pathToFile).default;
});

export default routes;
