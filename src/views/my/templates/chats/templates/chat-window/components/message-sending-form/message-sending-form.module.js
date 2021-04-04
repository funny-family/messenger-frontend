// import { EmitsConstructor } from '@/utils/emits-constructor.util';

// const emitConstructor = new EmitsConstructor([
//   // 'onTextareaInput'
//   'input'
// ]);

export default {
  name: 'MessageSendingForm',
  // emits: emitConstructor.getEmitNames(),
  // emits: [
  //   'input'
  // ],
  setup(_, { emit }) {
    // https://stackoverflow.com/questions/47221119/vuejs-how-to-prevent-textarea-default-behavior
    const message = {
      text: '',
      images: [],
      audio: null,
      video: null
    };

    // // eslint-disable-next-line
    // const isMessageValueEmpty = (value) => {
    //   if (
    //     value === '' ||
    //     value === null ||
    //     value === undefined ||
    //     value.length === 0
    //   ) {
    //     return false;
    //   }

    //   return true;
    // };

    // const emitObject = emitConstructor.getEmitObject();

    const updateTextareaValue = (value) => {
      message.text = value;
      emit('input', value);
    };

    // eslint-disable-next-line
    const resetTextareaValue = () => {
      emit('input', '');
    };

    const createNewLine = (value) => `${value}\n`;

    const submitMessageForm = (formFields) => {
      const formattedMessage = {
        ...formFields,
        text: formFields.text.trim()
      };

      console.log(formattedMessage);
    };

    return {
      message,
      submitMessageForm,
      updateTextareaValue,
      createNewLine
    };
  }
};
