import { ref } from 'vue';
import { EmitsConstructor } from '../../utils/emits-constructor.util';

const emitConstructor = new EmitsConstructor([
  'onClick'
]);

export default {
  name: 'BurgerButton',
  emits: emitConstructor.getEmitNames(),
  setup(_, { emit }) {
    const state = ref(false);

    const emitObject = emitConstructor.getEmitObject();

    function onClick(event) {
      state.value = event;
      return emit(emitObject.onClick, event);
    }

    return {
      state,
      onClick
    };
  }
};
