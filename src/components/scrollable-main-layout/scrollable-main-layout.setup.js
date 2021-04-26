import { useEmptySlotsChecker } from '@/utils/hooks/use-empty-slots-checker.hook';

export function setup(_, { slots }) {
  const slotChecker = useEmptySlotsChecker(slots);

  return {
    slotChecker
  };
}
