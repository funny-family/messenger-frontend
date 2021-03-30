export function collectExportedRoutes(routes) {
  const routesInContainer = Object.assign([], routes);
  const routesContainer = [];

  // eslint-disable-next-line
  for (const route in routesInContainer) {
    if (Object.hasOwnProperty.call(routesInContainer, route)) {
      const element = routesInContainer[route];

      routesContainer.push(element);
    }
  }

  return routesContainer;
}
