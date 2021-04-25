<template>
  <header class="chat-header">
    <form
      class="chat-header__form"
      @submit.prevent
    >
      <ClearableInput class="chat-header__input1" />
      <input
        v-model.trim="chatName"
        class="chat-header__input"
        type="text"
        @input="onInput($event.target.value)"
      />
      <div>{{ chatName }}</div>
    </form>
  </header>
</template>

<script src="./chat-header.module.js"></script>

<style scoped src="./chat-header.styles.css"></style>
