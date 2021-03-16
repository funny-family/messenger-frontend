<template>
  <section class="chat-list">
    <Chat
      v-for="chat in chatList"
      :key="chat.id"
      :id="`${chat.id}`"
      :avatar="chat.name[0]"
      :name="chat.username"
      :senderName="chat.address.city"
      :message="chat.company.catchPhrase"
      :timeOfLastMessage="Math.floor(Math.random() * 100)"
      :numberOfUnreadMessages="Math.floor(Math.random() * 10)"
    />
  </section>
</template>

<script src="./chat-list.module.js"></script>

<style scoped src="./chat-list.styles.css"></style>
