<template>
  <form
    class="chat-window-input"
    @submit.prevent="submitMessageForm(message)"
  >
    <!-- <label for="message-input"></label>
      <textarea
      id="message-input"
      name="message-input"
      placeholder="Type message here..."
      >
      </textarea> -->
    <!-- <div class="message-input" contenteditable="true" role="textbox"></div> -->
    <div class="message-container">
      <textarea
        ref="messageInput"
        v-model="message.text"
        class="message-input"
        placeholder="Type message here..."
        tabindex="0"
        @input="messageInputChange($event.target.value)"
      />
    </div>
    <button type="submit">
      ➤
    </button>
  </form>
</template>

<script src="./chat-window-input.module.js"></script>

<style scoped src="./chat-window-input.styles.css"></style>
