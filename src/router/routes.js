// https://stackoverflow.com/questions/64974795/vue-js-3-component-doesnt-load-in-vuejs-with-router

const notFoundPage = {
  name: () => this.component.name,
  path: '/404',
  component: () => import('../views/not-found'),
  meta: {
    title: 'Page not found!'
  }
};

const homePage = {
  name: () => this.component.name,
  path: '/',
  component: () => import('../views/home'),
  meta: {
    title: 'Home'
  }
};

const signin = {
  name: () => this.component.name,
  path: '/signin',
  component: () => import('../views/signin'),
  meta: {
    title: 'Sign in'
  }
};

const signup = {
  name: () => this.component.name,
  path: '/signup',
  component: () => import('../views/signup'),
  meta: {
    title: 'Sign up'
  }
};

const notExisting = {
  path: '/:catchAll(.*)',
  redirect: {
    name: notFoundPage.name
  }
};

const routes = [
  notExisting,
  notFoundPage,
  homePage,
  signin,
  signup
];

export default routes;
