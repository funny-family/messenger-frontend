<template>
  <router-link
    class="chat-card__link"
    :to="{
      name: 'ChatWindow',
      params: { id: id }
    }"
  >
    <ChatCard>
      <template v-slot:avatar>
        {{ avatar }}
      </template>

      <template v-slot:name>
        {{ name }}
      </template>

      <template
        v-if="timeOfTheLastMessageSent"
        v-slot:timeOfTheLastMessageSent
      >
        {{ formattedTimeOfTheLastMessageSent }}
      </template>

      <template v-slot:messageSenderName>
        {{ messageSenderName }}:
      </template>

      <template v-slot:message>
        {{ message }}
      </template>

      <template
        v-if="numberOfUnreadMessages > 0"
        v-slot:numberOfUnreadMessages
      >
        {{ formattedNumberOfUnreadMessages }}
      </template>
    </ChatCard>
  </router-link>
</template>

<script src="./chat.module.js"></script>

<style scoped src="./chat.styles.css"></style>
