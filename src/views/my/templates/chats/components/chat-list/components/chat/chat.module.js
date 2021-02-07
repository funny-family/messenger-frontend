export default {
  name: 'Chat',
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
    nameOfTheMessageSender: {
      type: String
    },
    message: {
      type: String,
      required: true
    },
    timeOfLastMeaasge: {
      type: Number,
      required: true
    },
    unreadMessages: {
      type: Number
    }
  }
};
