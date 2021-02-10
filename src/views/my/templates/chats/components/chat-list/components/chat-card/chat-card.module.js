import { computed } from 'vue';

export default {
  name: 'ChatCard',
  props: {
    // id: {
    //   type: String
    // }
  },
  setup(_, { slots }) {
    const isAvatarSlotEmpty = computed(() => !!slots.avatar);
    const isNameSlotEmpty = computed(() => !!slots.name);
    const isTimeOfLastMessageSlotEmpty = computed(() => !!slots.timeOfLastMessage);
    const isNameOfTheMessageSenderSlotEmpty = computed(() => !!slots.nameOfTheMessageSender);
    const isMessageSlotEmpty = computed(() => !!slots.message);
    const isUnreadMessagesSlotEmpty = computed(() => !!slots.unreadMessages);

    return {
      isAvatarSlotEmpty,
      isNameSlotEmpty,
      isTimeOfLastMessageSlotEmpty,
      isNameOfTheMessageSenderSlotEmpty,
      isMessageSlotEmpty,
      isUnreadMessagesSlotEmpty
    };
  }
};
