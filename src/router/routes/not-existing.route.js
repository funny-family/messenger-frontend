import notFound from './not-found.route';

const notExisting = (() => ({
  path: '/:catchAll(.*)',
  redirect: {
    name: notFound.name
  }
}))();

export default notExisting;
