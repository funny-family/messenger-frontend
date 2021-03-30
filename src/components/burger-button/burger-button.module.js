import { ref } from 'vue';

class EmitsConstructor {
  /**
   * @param {array} names
   */
  constructor(names = []) {
    this.names = names;

    if (!Array.isArray(this.names)) {
      throw TypeError('emitNames must be an array!');
    }

    const camelCaseRegExp = /[a-z]+((\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?/;
    // eslint-disable-next-line
    for (const emitName of this.names) {

      const result = emitName.match(camelCaseRegExp);
      const resultOutput = result[0];
      const resultInput = result.input;

      if (resultOutput !== resultInput) {
        throw Error('Emit name must be in camelCase!');
      }
    }
  }

  /**
   * @returns {String[]}
   */
  getEmitNames() {
    return this.names;
  }

  /**
   * @returns {Object}
   */
  getEmitObject() {
    const emitObject = {};

    // eslint-disable-next-line
    for (const emitName of this.names) {
      emitObject[emitName] = emitName;
    }

    return emitObject;
  }
}

const emitConstructor = new EmitsConstructor([
  'onClick'
]);

export default {
  name: 'BurgerButton',
  emits: emitConstructor.names,
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
