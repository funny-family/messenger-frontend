<template>
  <section class="chat-list">
    <Chat
      v-for="chat in chatList"
      :id="`${chat.id}`"
      :key="chat.id"
      :avatar="chat.name[0]"
      :name="chat.username"
      :sender-name="chat.address.city"
      :message="chat.company.catchPhrase"
      :time-of-last-message="Math.floor(Math.random() * 100)"
      :number-of-unread-messages="Math.floor(Math.random() * 10)"
    />
  </section>
</template>

<script src="./chat-list.module.js"></script>

<style scoped src="./chat-list.styles.css"></style>
