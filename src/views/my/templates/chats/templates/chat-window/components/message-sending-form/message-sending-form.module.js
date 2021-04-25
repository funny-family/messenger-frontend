// import { EmitsConstructor } from '@/utils/emits-constructor.util';

// const emitConstructor = new EmitsConstructor([
//   // 'onTextareaInput'
//   'input'
// ]);

import { reactive } from 'vue';

import Textarea from '@/components/textarea';

export default {
  name: 'MessageSendingForm',
  components: {
    Textarea
  },
  // emits: emitConstructor.getEmitNames(),
  // emits: [
  //   'input'
  // ],
  setup() {
    // https://stackoverflow.com/questions/47221119/vuejs-how-to-prevent-textarea-default-behavior
    // https://stackoverflow.com/questions/8440357/how-to-reset-this-js-object
    function getMessage() {
      const message = {
        text: '',
        images: [],
        audios: [],
        videos: [],

        reset() {
          Object.assign(this, getMessage());
        }
      };

      return message;
    }
    const message = reactive(getMessage());

    function checkIfFormFieldValueEmpty(value) {
      let isValueEmpty = false;
      if (typeof value === 'string') {
        if (value === '') {
          isValueEmpty = true;
        }
      }

      if (Array.isArray(value)) {
        if (value.length === 0) {
          isValueEmpty = true;
        }
      }

      // ignore built-in "reset" function
      if (typeof value === 'function') {
        isValueEmpty = typeof value;
      }

      return isValueEmpty;
    }

    function submitMessageForm(formFields) {
      /**
       * formattedMessage will be send to server!
       */
      // ========= test values! =========
      // formFields.images.push(1, 2, 3, 4);
      // formFields.audios.push(1, 2, 3);
      // formFields.videos.push(1, 2);
      // ========= test values! =========

      const formattedMessage = {
        ...formFields,
        text: formFields.text.trim()
      };

      let numberOfFields = 0;
      let numberOfEmptyFields = 0;
      let numberOfFilledFields = 0;
      for (const formField of Object.entries(formattedMessage)) {
        numberOfFields += 1;
        const formFieldValue = formField[1];
        const isFormFieldValueEmpty = checkIfFormFieldValueEmpty(formFieldValue);

        if (isFormFieldValueEmpty) {
          numberOfEmptyFields += 1;
        }
      }
      numberOfFilledFields = numberOfFields - numberOfEmptyFields;
      // eslint-disable-next-line
      console.log('numberOfFilledFields:', numberOfFilledFields)

      if (numberOfFilledFields < 1) {
        return;
      }

      // eslint-disable-next-line
      console.log('result:', { ...formattedMessage });

      // reset data for server.
      formattedMessage.reset();
      message.reset();

      // console.log('after:', { ...formattedMessage });
      // console.log('after:', message);
    }

    return {
      message,
      submitMessageForm
    };
  }
};
