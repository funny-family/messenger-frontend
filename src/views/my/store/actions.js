import state from './state';

export default {
  setChatSelection() {
    state.isChatSelected.value = true;
  },

  unsetChatSelection() {
    state.isChatSelected.value = false;
  }
};
