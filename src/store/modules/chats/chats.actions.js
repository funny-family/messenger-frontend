import mutations from './chats.mutations';

export default {
  async fetchThem({ commit }) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();

      // throw new Error('bal bla!');
      // eslint-disable-next-line
      commit(mutations.PUT_FETCHED_CONTACTS_IN_LIST.name, data);
      commit(mutations.SET_LOADING_STATE.name, false);
    } catch {
      commit(mutations.PUT_FETCHED_CONTACTS_IN_LIST.name, []);
      commit(mutations.SET_LOADING_STATE.name, false);
    }
  }
};
