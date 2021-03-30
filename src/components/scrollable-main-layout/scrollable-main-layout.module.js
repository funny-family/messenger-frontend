import { computed } from 'vue';

export default {
  name: 'ScrollableMainLayout',
  setup(_, { slots }) {
    const isHeaderSlotEmpty = computed(() => !!slots.header);
    const isMainSlotEmpty = computed(() => !!slots.main);
    const isFooterSlotEmpty = computed(() => !!slots.footer);

    return {
      isHeaderSlotEmpty,
      isMainSlotEmpty,
      isFooterSlotEmpty
    };
  }
};
