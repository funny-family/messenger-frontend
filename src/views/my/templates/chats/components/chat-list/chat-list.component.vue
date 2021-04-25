<template>
  <div class="chat-block">
    <section
      v-if="chatList.length !== 0 && isChatListLoading === false"
      class="chat-block__list"
    >
      <Chat
        v-for="chat in chatList"
        :id="`${chat.id}`"
        :key="chat.id"
        :avatar="chat.name[0]"
        :name="chat.username"
        :messageSenderName="chat.address.city"
        :message="chat.company.catchPhrase"
        :timeOfTheLastMessageSent="createRandomDate(new Date(2012, 0, 1), new Date())"
        :numberOfUnreadMessages="Math.floor(Math.random() * 10)"
      />
    </section>

    <section
      v-if="chatList.length === 0 && isChatListLoading === false"
      class="chat-block__no-chats"
    >
      <h3>You have no chats yet! 🙄</h3>
    </section>
  </div>
</template>

<script src="./chat-list.module.js"></script>

<style scoped src="./chat-list.styles.css"></style>
