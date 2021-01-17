<template>
  <div>
    <Contact />
    {{ JSON.stringify(contactList) }}
  </div>
</template>

<script>
import { useStore, modules } from '@/store';
import { computed } from 'vue';

import Contact from './components/contact';

const { contacts } = modules;

export default {
  name: 'ContactList',
  components: {
    Contact
  },
  setup() {
    const { state, dispatch } = useStore();
    const contactList = computed(() => state.contacts.list);

    dispatch(`${contacts.data.moduleName}/${contacts.data.names.actions.fetchThem}`);
    return {
      contactList
    };
  }
};
</script>

<style scoped>
@import url('./contact-list.style.css');
</style>
