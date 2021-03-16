<template>
  <article class="chat-card-grid chat-card">
    <div
      class="chat-card__avatar"
      v-if="usedSlots.isAvatarSlotUsed"
    >
      <slot name="avatar" />
    </div>
    <div class="chat-card-column text-ellipsis">
      <div class="chat-card-row space-between">
        <div
          class="chat-card__name text-ellipsis"
          v-if="usedSlots.isNameSlotUsed"
        >
          <slot name="name" />
        </div>
        <div
          class="chat-card__time-of-last-message"
          v-if="usedSlots.isTimeOfLastMessageSlotUsed"
        >
          <slot name="timeOfLastMessage" />
        </div>
      </div>
      <div class="chat-card-row space-between">
        <div class="chat-card__message-container text-ellipsis">
          <span
            class="chat-card__sender-name"
            v-if="usedSlots.isSenderNameSlotUsed"
          >
            <slot name="senderName" />
          </span>
          <span
            class="chat-card__message"
            v-if="usedSlots.isMessageSlotUsed"
          >
            <slot name="message" />
          </span>
        </div>
        <div
          class="chat-card__unread-message"
          v-if="usedSlots.isNumberOfUnreadMessagesSlotUsed"
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
