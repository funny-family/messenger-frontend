// eslint-disable-next-line
import { mutations } from './chat.mutations';

export const actions = {
  async fetchThem({ commit }) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const fetchedChatList = await response.json();

      // throw new Error('bal bla!');

      commit(mutations.FILL_LIST.name, fetchedChatList);
      commit(mutations.SET_LOADING_TO_LIST.name, false);
    } catch {
      commit(mutations.FILL.name, []);
      commit(mutations.SET_LOADING_TO_LIST.name, false);
    }
  }
};
