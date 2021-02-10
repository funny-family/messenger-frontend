<template>
  <ChatCard class="clc-container">
    <template v-slot:avatar>
      <div
        class="
          clc__avatar
          chat-is-loading
        "
      >
      </div>
    </template>

    <template v-slot:name>
      <div
        class="
          clc__name
          chat-is-loading
          clc-border-radius
        "
      >
      </div>
    </template>

    <template v-slot:timeOfLastMessage>
      <div
        class="
          clc__time-of-last-message
          chat-is-loading
          clc-border-radius
        "
      >
      </div>
    </template>

    <template v-slot:message>
      <div
        class="
          clc__message
          chat-is-loading
          clc-border-radius
        "
      >
      </div>
    </template>
  </ChatCard>
</template>

<script src="./chat-loading-card.module.js"></script>

<style scoped src="./chat-loading-card.styles.css"></style>
