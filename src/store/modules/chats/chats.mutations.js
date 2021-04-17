export default {
  /**
   * @param {*} state
   * @param {boolean} isLoading
   */
  SET_LOADING_STATE(state, isLoading) {
    state.isLoading = isLoading;
  },

  PUT_FETCHED_CONTACTS_IN_LIST(state, fetchedContacts) {
    state.list = fetchedContacts;
  }
};
