// https://stackoverflow.com/questions/64974795/vue-js-3-component-doesnt-load-in-vuejs-with-router

export const notFoundPage = {
  name: () => this.component.name,
  path: '/404',
  component: () => import('../views/not-found'),
  meta: {
    title: 'Page not found!'
  }
};

export const homePage = {
  name: () => this.component.name,
  path: '/',
  component: () => import('../views/home'),
  meta: {
    title: 'Home'
  }
};

export const signin = {
  name: () => this.component.name,
  path: '/signin',
  component: () => import('../views/sign-in'),
  meta: {
    title: 'Sign in'
  }
};

export const signup = {
  name: () => this.component.name,
  path: '/signup',
  component: () => import('../views/sign-up'),
  meta: {
    title: 'Sign up'
  }
};

export const notExisting = {
  path: '/:catchAll(.*)',
  redirect: {
    name: notFoundPage.name
  }
};
