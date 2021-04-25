<template>
  <div class="chat-history">
    <pre>
      {{ currentSelectedChatData }}
    </pre>
    <div
      v-for="i in 40"
      :key="i"
    >
      {{ i }}
    </div>
  </div>
</template>

<script src="./chat-history.module.js"></script>

<style scoped src="./chat-history.styles.css"></style>
