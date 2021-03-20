import { onMounted, ref, watchEffect } from 'vue';

export default {
  name: 'ChatWindowInput',
  setup() {
    const message = {
      text: '',
      images: [],
      audio: null,
      video: null
    };

    // https://stackoverflow.com/questions/34764304/contenteditable-allowing-only-plain-text
    const submitMessageForm = (formFields) => {
      const processedMessage = {};

      // eslint-disable-next-line
      for (const formField of Object.entries(formFields)) {
        const formFieldName = formField[0];
        const formFieldValue = formField[1];

        // if (!formFieldValue || !Array.isArray(formFieldValue).length) {
        //   console.log(1111, formFieldValue);
        // }

        processedMessage[formFieldName] = formFieldValue;
      }

      console.log('processedMessage:', processedMessage);

      return processedMessage;
    };

    // https://www.scottstadt.com/2019/06/03/vue-autosize-textarea.html
    // https://stackoverflow.com/questions/34764304/contenteditable-allowing-only-plain-text
    const messageInput = ref(null);
    const messageInputChange = (value) => {
      console.log('messageInput value:', value);
      messageInput.value.style.height = 0;
      messageInput.value.style.height = `${messageInput.value.scrollHeight}px`;
    };
    onMounted(() => {
      console.log(messageInput.value.textContent);
    });
    watchEffect(() => {
      // console.log(messageInput.value.textContent);
    });

    return {
      messageInputChange,
      messageInput,
      message,
      submitMessageForm
    };
  }
};
