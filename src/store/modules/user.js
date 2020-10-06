import fetchSecureData from '../functions/fetch-secure-data';

export default {
  state: {},
  mutations: {},
  actions: {
    async getUserInfo({ commit }) {
      try {
        console.log(commit);
        console.log('fetchSecureData inside getUserInfo action:', await fetchSecureData());
        // const url = 'http://localhost:3000/api/v1/user/me';
        // const response = await fetchSecureData(url, {
        //   method: 'GET',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   }
        // });
        // if (await response.ok) {
        //   console.log('user data:', response.json());
        // } else {
        //   console.log('cannot fetch user data');
        // }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
