import { ref } from 'vue';

import { useEmptySlotsChecker } from '@/utils/hooks/use-empty-slots-checker.hook';

export const setup = (_, { slots }) => {
  const slotChecker = useEmptySlotsChecker(slots);

  const refs = {
    header: ref(null),
    main: ref(null),
    footer: ref(null)
  };

  return {
    slotChecker,
    refs
  };
};
