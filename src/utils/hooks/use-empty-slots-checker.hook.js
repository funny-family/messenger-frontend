import { computed } from 'vue';

/**
 * @param {object} slots
 */
export function useEmptySlotsChecker(slots) {
  const usedSlots = {};

  // function capitalizeFirstLetter(string) {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // }

  for (const [slotName, slotValue] of Object.entries({ ...slots })) {
    // /**
    //  * example:
    //  * capitalizeFirstLetter(senderName) return SenderName

    //  * [`is${capitalizeFirstLetter(slot[0])}SlotUsed`] ->
    //  *  is + SenderName + SlotUsed= isSenderNameSlotUsed

    //  * computed(() => !!slot[1]) -> convert to slot to Boolean true/false
    //  */
    // const nameOfUsedSlot = `is${capitalizeFirstLetter(slot[0])}SlotUsed`;
    // usedSlots[nameOfUsedSlot] = computed(() => !!slot[1]);

    const nameOfUsedSlot = `${slotName}`;
    const doesSlotHasChildren = !!slotValue;
    usedSlots[nameOfUsedSlot] = computed(() => doesSlotHasChildren);
  }

  return usedSlots;
}
