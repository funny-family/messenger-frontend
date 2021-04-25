import { ref, watch } from 'vue';

import ClearableInput from '../../../../../../components/clearable-input';

export default {
  name: 'ChatHeader',
  components: {
    ClearableInput
  },
  setup() {
    function debounce(fn, delay) {
      let timer = null;

      // eslint-disable-next-line
      return function () {
        // eslint-disable-next-line
        const args = arguments;
        const context = this;

        clearTimeout(timer);

        timer = setTimeout(() => {
          fn.apply(context, args);
        }, delay);
      };
    }

    const chatName = ref('');
    const onInput = debounce((value) => {
      watch(
        () => chatName.value,
        () => {
          chatName.value = value;
          // console.log(chatName.value);
        }
      );
    }, 500);

    return {
      onInput,
      chatName
    };
  }
};
