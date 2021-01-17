<template>
  <div>
    <ContactList />
  </div>
</template>

<script>
import ContactList from './components/contact-list';

export default {
  name: 'Chats',
  components: {
    ContactList
  }
};
</script>

<style scoped>
@import url('./chats.style.css');
</style>
