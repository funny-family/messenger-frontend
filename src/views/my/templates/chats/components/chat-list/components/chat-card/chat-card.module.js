import { computed } from 'vue';

/**
 * @param {object} slots
 */
function useEmptySlotsChecker(slots) {
  const usedSlots = {};

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // eslint-disable-next-line
  for (const slot of Object.entries({ ...slots })) {
    /**
     * example:
     * capitalizeFirstLetter(senderName) return SenderName

     * [`is${capitalizeFirstLetter(slot[0])}SlotUsed`] ->
     *  is + SenderName + SlotUsed= isSenderNameSlotUsed

     * computed(() => !!slot[1]) -> convert to slot to Boolean true/false
     */
    const nameOfUsedSlot = `is${capitalizeFirstLetter(slot[0])}SlotUsed`;
    usedSlots[nameOfUsedSlot] = computed(() => !!slot[1]);
  }

  return usedSlots;
}

const availableSlots = {};

export default {
  name: 'ChatCard',
  slots: availableSlots,
  setup(_, { slots }) {
    const usedSlots = useEmptySlotsChecker(slots);

    /**
     * export new "slots" object witch contain all slot names of ChatCard
     */
    // eslint-disable-next-line
    for (const slot of Object.entries({ ...slots })) {
      const slotName = slot[0];
      availableSlots[slotName] = slotName;
    }

    return {
      usedSlots
    };
  }
};
