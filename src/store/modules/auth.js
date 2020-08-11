export default {
  state: {
    isUserLoggedIn: false,
    isUserSiggedUp: false,
    authError: {}
  },
  mutations: {
    SIGN_IN(state) {
      state.isUserLoggedIn = true;
    },
    SIGN_UP(state) {
      state.isUserSiggedUp = true;
    },
    SIGN_OUT(state) {
      state.isUserLoggedIn = false;
    },
    AUTH_ERRORS_SETTER(state, error) {
      state.authError = error;
    }
  },
  actions: {
    async signUp({ commit }, {
      username, email, password, password_confirmation
    }) {
      try {
        const userRegistrationData = {
          username,
          email,
          password,
          password_confirmation
        };
        const url = process.env.VUE_APP_SIGN_UP_URL;
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userRegistrationData)
        });
        console.log(response);
        if (response.ok) {
          await response.json();
          commit('SIGN_UP');
        } else {
          const result = await response.json();
          const errors = {
            username: {
              message: ''
            },
            email: {
              message: ''
            },
            password: {
              message: ''
            },
            password_confirmation: {
              message: ''
            }
          };
          errors.email.message = result.errors.email.properties.message;
          commit('AUTH_ERRORS_SETTER', errors);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async signIn({ commit }, {
      email, password
    }) {
      try {
        const userLoginData = {
          email,
          password
        };
        const url = process.env.VUE_APP_SIGN_IN_URL;
        const response = await fetch(url, {
          method: 'POST',
          credentials: 'include', // for cookies
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userLoginData)
        });
        const result = await response.json();
        console.log('response', response);
        console.log('SIGN IN FETCH RESULT!', result);
        commit('SIGN_IN');
      } catch (error) {
        console.log(error);
      }
    },
    async signOut({ commit }) {
      try {
        const url = process.env.VUE_APP_SIGN_OUT_URL;
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            // 'Content-Type': 'application/json'
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });
        console.log('response', response);
        const result = await response.json();
        console.log(result);
        commit('SIGN_OUT');
      } catch (error) {
        console.log(error);
      }
    }
  }
};
