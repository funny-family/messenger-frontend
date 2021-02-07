import { ref } from 'vue';

const emitEnum = {
  onClick: 'onClick'
};

export default {
  name: 'BurgerButton',
  emits: [emitEnum.onClick],
  setup(_, { emit }) {
    const state = ref(false);

    function onClick(event) {
      state.value = event;
      return emit(emitEnum.onClick, event);
    }

    return {
      state,
      onClick
    };
  }
};
