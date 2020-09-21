import config from '@/config';

export default {
  state: {
    isUserLoggedIn: false,
    isUserSiggedUp: false,
    authError: {}
  },
  mutations: {
    SIGNED_IN(state) {
      state.isUserLoggedIn = true;
    },
    SIGNED_UP(state) {
      state.isUserSiggedUp = true;
    },
    SIGNED_OUT(state) {
      state.isUserLoggedIn = false;
    },
    SET_AUTH_ERRORS(state, error) {
      state.authError = error;
    },
    CLEAR_AUTH_ERRORS(state) {
      state.authError = {};
    }
  },
  actions: {
    async signUp({ commit }, {
      username, email, password, password_confirmation
    }) {
      try {
        commit('CLEAR_AUTH_ERRORS');
        const userRegistrationData = {
          username,
          email,
          password,
          password_confirmation
        };
        const url = config.api.url.signup;
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userRegistrationData)
        });
        console.log(response);
        if (await response.ok) {
          commit('SIGNED_UP');
        } else {
          const result = await response.json();
          commit('SET_AUTH_ERRORS', result.errors);
        }
      } catch (error) {
        console.log(error);
      }
    },

    async signIn({ commit }, {
      email, password
    }) {
      try {
        commit('CLEAR_AUTH_ERRORS');
        const userLoginData = {
          email,
          password
        };
        const url = config.api.url.signin;
        const response = await fetch(url, {
          method: 'POST',
          credentials: 'include', // for cookies
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userLoginData)
        });
        console.log(response);
        if (await response.ok) {
          commit('SIGNED_IN');
        } else {
          const result = await response.json();
          commit('SET_AUTH_ERRORS', result.errors);
        }
      } catch (error) {
        console.log(error);
      }
    },

    async signOut({ commit }) {
      try {
        const url = config.api.url.signout;
        const response = await fetch(url, {
          method: 'POST',
          credentials: 'include', // for cookies
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log('response', response);
        if (await response.ok) {
          commit('SIGNED_OUT');
        }
      } catch (error) {
        console.log(error);
      }
    },

    async refreshAuth({ commit }) {
      try {
        const url = config.api.url.refreshAuth;
        const response = await fetch(url, {
          method: 'POST',
          credentials: 'include', // for cookies
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (await response.ok) {
          commit('SIGNED_IN');
        } else {
          commit('SIGNED_OUT');
        }
      } catch (error) {
        console.log(error);
      }
    },

    async checkAuth({ commit, dispatch }) {
      try {
        const url = config.api.url.checkAuth;
        const response = await fetch(url, {
          method: 'POST',
          credentials: 'include', // for cookies
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (await response.ok) {
          console.log(response.text(), response);
          commit('SIGNED_IN');
        } else {
          dispatch('refreshAuth');
        }
      } catch (error) {
        console.log(error);
      }
    },

    keepUserAthenticated({ dispatch, state }) {
      do {
        dispatch('checkAuth');
      } while (state.isUserLoggedIn === true);
    }
  }
};
