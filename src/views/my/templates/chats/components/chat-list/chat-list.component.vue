<template>
  <section class="chat-list">
    <template v-if="isChatListLoaded">
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
    </template>

    <template v-else>
      <section class="chat-list__loading-block">
        <h2>Loading...</h2>
      </section>
    </template>
  </section>
</template>

<script src="./chat-list.module.js"></script>

<style scoped src="./chat-list.styles.css"></style>
