<template>
  <router-link
    class="chat__link"
    :to="{ name: 'ChatWindow',
    params: { id: id } }"
  >
    <article class="chat-grid chat">
      <div class="chat__avatar">{{ avatar }} {{ id }}</div>
      <div class="chat-column text-ellipsis">
        <div class="chat-row space-between">
          <div class="chat__name text-ellipsis">{{ name }}</div>
          <div class="chat__time-of-last-message">
            time: {{ timeOfLastMeaasge }}
          </div>
        </div>
        <div class="chat-row space-between">
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

<style scoped src="./chat.layout.styles.css"></style>
<style scoped src="./chat.styles.css"></style>
