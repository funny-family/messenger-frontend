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
            v-show="unreadMessages > 0"
          >
            {{ unreadMessages }}
          </div>
        </div>
      </div>
    </article>
  </router-link>
</template>

<script src="./chat.module.js"></script>

<style scoped src="./chat.layout.styles.css"></style>
<style scoped src="./chat.styles.css"></style>
