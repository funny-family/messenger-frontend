import ChatCard from '../chat-card';

export default {
  name: 'Chat',
  components: {
    ChatCard
  },
  props: {
    id: {
      type: String,
      required: false
    },
    avatar: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: false
    },
    messageSenderName: {
      type: String,
      required: false
    },
    message: {
      type: String,
      required: false
    },
    timeOfTheLastMessageSent: {
      type: Date,
      required: false
    },
    numberOfUnreadMessages: {
      type: Number,
      required: false
    }
  },
  setup(props) {
    const formattedTimeOfTheLastMessageSent = (
      'at' +
      ' ' +
      `${props.timeOfTheLastMessageSent.toLocaleString(
        'en-US', { hour: 'numeric', minute: 'numeric', hour12: true }
      )}`
    );

    function convertThousandToShort(number) {
      const shortNumberAsAString = (
        Math.abs(number) > 999 ?
          `${Math.sign(number) * ((Math.abs(number) / 1000).toFixed(1))}k` :
          `${Math.sign(number) * Math.abs(number)}`
      );

      return shortNumberAsAString;
    }

    const formattedNumberOfUnreadMessages = convertThousandToShort(props.numberOfUnreadMessages);

    return {
      formattedTimeOfTheLastMessageSent,
      formattedNumberOfUnreadMessages
    };
  }
};
