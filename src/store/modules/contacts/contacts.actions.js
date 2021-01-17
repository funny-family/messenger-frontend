import mutations from './contacts.mutations';

export default {
  async fetchThem({ commit }) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();

      commit(mutations.PUT_FETCHED_CONTACTS_IN_LIST.name, data);
    } catch {
      //
    } finally {
      //
    }
  }
};
