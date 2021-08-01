export default {
  /**
   * @param {*} state
   * @param {boolean} isLoading
   */
  SET_LOADING_TO_LIST(state, isLoading) {
    state.isLoading = isLoading;
  },

  /**
   * @param {*} state
   * @param {Object[]} fetchedChatList
   */
  FILL_LIST(state, fetchedChatList) {
    const formattedChatList = [];

    fetchedChatList.map((chat) => {
      const formattedChat = formattedChatList.push({
        ...chat,
        id: chat.id.toString()
      });

      return formattedChat;
    });

    state.list = formattedChatList;
  }
};
