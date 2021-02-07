<template>
  <section class="chat-list">
    <Chat
      v-for="chat in chatList"
      :key="chat.id"
      :id="`${chat.id}`"
      :avatar="chat.name[0]"
      :name="chat.username"
      :nameOfTheMessageSender="chat.address.city"
      :message="chat.company.catchPhrase"
      :timeOfLastMeaasge="Math.floor(Math.random() * 100)"
      :unreadMessages="Math.floor(Math.random() * 10)"
    />
  </section>
</template>

<script src="./chat-list.module.js"></script>

<style scoped src="./chat-list.styles.css"></style>
