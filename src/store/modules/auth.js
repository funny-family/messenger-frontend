export default {
  state: {
    isUserLoggedIn: false
  },
  mutations: {
    SIGN_IN(state) {
      state.isUserLoggedIn = true;
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
        const result = await response.json();
        commit('SIGN_IN');
        console.log('SIGN UP FETCH RESULT!', result);
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
        console.log(commit);
        console.log('userLoginData:', userLoginData);
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
        console.log('SIGN IN FETCH RESULT!', result);
      } catch (error) {
        console.log(error);
      }
    },
    async signOut({ commit }) {
      try {
        console.log(commit);
        const url = process.env.VUE_APP_SIGN_OUT_URL;
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            // 'Content-Type': 'application/json'
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
