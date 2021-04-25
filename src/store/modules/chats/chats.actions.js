import mutations from './chats.mutations';

export default {
  async fetchThem({ commit }) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const fetchedChatList = await response.json();

      // throw new Error('bal bla!');

      commit(mutations.FILL_LIST.name, fetchedChatList);
      commit(mutations.SET_LOADING_STATE.name, false);
    } catch {
      commit(mutations.FILL_LIST.name, []);
      commit(mutations.SET_LOADING_STATE.name, false);
    }
  }
};
