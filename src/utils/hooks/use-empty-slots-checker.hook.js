// TODO: need to make FULL refactor of this hook!!!!
import { reactive } from 'vue';

/**
 * @param {object} slots
 */
export function useEmptySlotsChecker(slots) {
  const usedSlots = reactive({});

  // function capitalizeFirstLetter(string) {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // }

  for (const [slotName, slotValue] of Object.entries({ ...slots })) {
    const slotChildren = slotValue()[0].children;
    slotValue().forEach(() => {
      // console.log(2342, c);
    });
    // eslint-disable-next-line
    const isSlotChildrenEmpty = !!(Array.isArray(slotChildren) && slotChildren.length > 0);
    usedSlots[slotName] = true;
  }

  return usedSlots;
}
