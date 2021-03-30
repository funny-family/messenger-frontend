import ChatCard from '../chat-card';

export default {
  name: 'Chat',
  components: {
    ChatCard
  },
  props: {
    id: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    senderName: {
      type: String
    },
    message: {
      type: String,
      required: true
    },
    timeOfLastMessage: {
      type: Number,
      required: true
    },
    numberOfUnreadMessages: {
      type: Number
    }
  },
  setup() {
    // console.log('ChatCard', ChatCard);

    return {};
  }
};
