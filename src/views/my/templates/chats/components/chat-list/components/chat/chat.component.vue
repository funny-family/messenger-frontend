<template>
  <router-link
    class="chat-card__link"
    :to="{ name: 'ChatWindow',
    params: { id: id } }"
  >
    <ChatCard>
      <template v-slot:avatar>
        {{ avatar }}
      </template>

      <template v-slot:name>
        {{ name }}
      </template>

      <template v-slot:timeOfLastMessage>
        time: {{ timeOfLastMessage }}
      </template>

      <template v-slot:nameOfTheMessageSender>
        {{ nameOfTheMessageSender }}
      </template>

      <template v-slot:message>
        {{ message }}
      </template>

      <template v-slot:unreadMessages v-if="unreadMessages > 0">
        {{ unreadMessages }}
      </template>
    </ChatCard>
  </router-link>
</template>

<script src="./chat.module.js"></script>

<style scoped src="./chat.styles.css"></style>
