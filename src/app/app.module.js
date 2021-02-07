import { onBeforeMount } from 'vue';

export default {
  name: 'App',
  setup() {
    const bodyElement = document.querySelector('body');

    onBeforeMount(() => {
      if (!bodyElement.classList.length) {
        bodyElement.classList.add('light'); // set "light" class as default theme
      } else {
        bodyElement.classList.add('light');
      }
    });
  }
};
