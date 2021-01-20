<template>
  <article class="grid contact">
    <div class="contact__avatar">{{ avatar }}</div>
    <div class="col text-ellipsis">
      <div class="row space-between">
        <div class="contact__name text-ellipsis">{{ name }}</div>
        <div class="contact__time-of-last-message">
          time: {{ timeOfLastMeaasge }}
        </div>
      </div>
      <div class="row space-between">
        <div class="contact__message-container text-ellipsis">
          <span
            class="contact__sender-name"
            v-if="nameOfTheMessageSender"
          >
            {{ nameOfTheMessageSender }}:
          </span>
          <span class="contact__message">{{ message }}</span>
        </div>
        <div class="contact__unread-message">
          {{ unreadMessages }}
        </div>
      </div>
    </div>
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
      type: String
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
@import url('./contact.layout.style.css');
@import url('./contact.style.css');
</style>
