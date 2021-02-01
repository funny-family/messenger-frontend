<template>
  <router-link
    :to="{ name: 'ChatWindow',
    params: { id: id } }"
  >
    <article class="grid chat">
      <div class="chat__avatar">{{ avatar }} {{ id }}</div>
      <div class="col text-ellipsis">
        <div class="row space-between">
          <div class="chat__name text-ellipsis">{{ name }}</div>
          <div class="chat__time-of-last-message">
            time: {{ timeOfLastMeaasge }}
          </div>
        </div>
        <div class="row space-between">
          <div class="chat__message-container text-ellipsis">
            <span
              class="chat__sender-name"
              v-if="nameOfTheMessageSender"
            >
              {{ nameOfTheMessageSender }}:
            </span>
            <span class="chat__message">{{ message }}</span>
          </div>
          <div
            class="chat__unread-message"
            v-if="unreadMessages > 0"
          >
            {{ unreadMessages }}
          </div>
        </div>
      </div>
    </article>
  </router-link>
</template>

<script>
export default {
  name: 'Chat',
  props: {
    id: {
      type: String,
      required: true
    },
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
@import url('./chat.layout.style.css');
@import url('./chat.style.css');
</style>
