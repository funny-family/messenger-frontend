<template>
  <article class="contact">
    <div class="contact__avatar">{{ avatar }}</div>
    <div class="contact__name">{{ name }}</div>
    <div>
      <span
        class="contact__name-of-the-message-sender"
        v-if="nameOfTheMessageSender"
      >
        {{ nameOfTheMessageSender }}:
      </span>
      <span class="contact__message">{{ message }}</span>
    </div>
    <div class="contact__time-of-last-message">{{ timeOfLastMeaasge }}</div>
    <div class="contact__unread-message">{{ unreadMessages }}</div>
  </article>
</template>

<script>
export default {
  name: 'Contact',
  props: {
    avatar: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    nameOfTheMessageSender: {
      type: String,
      required: true
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
</script>

<style scoped>
@import url('./contact.style.css');
</style>
