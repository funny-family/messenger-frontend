<template>
  <article class="chat-card-grid chat-card">
    <div
      v-if="slotChecker.avatar"
      class="chat-card__avatar"
    >
      <slot name="avatar" />
    </div>
    <div class="chat-card-column text-ellipsis">
      <div class="chat-card-row space-between">
        <div
          v-if="slotChecker.name"
          class="chat-card__name text-ellipsis"
        >
          <slot name="name" />
        </div>
        <div
          v-if="slotChecker.timeOfTheLastMessageSent"
          class="chat-card__time-of-last-message"
        >
          <slot name="timeOfTheLastMessageSent" />
        </div>
      </div>
      <div class="chat-card-row space-between">
        <div class="chat-card__message-container text-ellipsis">
          <span
            v-if="slotChecker.messageSenderName"
            class="chat-card__sender-name"
          >
            <slot name="messageSenderName" />
          </span>
          <span
            v-if="slotChecker.message"
            class="chat-card__message"
          >
            <slot name="message" />
          </span>
        </div>
        <div
          v-if="slotChecker.numberOfUnreadMessages"
          class="chat-card__unread-message"
        >
          <slot name="numberOfUnreadMessages" />
        </div>
      </div>
    </div>
  </article>
</template>

<script src="./chat-card.module.js"></script>

<style scoped src="./chat-card.styles.css"></style>

<style scoped src="./chat-card.styles.layout.css"></style>
