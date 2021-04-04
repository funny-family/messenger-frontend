<template>
  <!-- https://www.google.com/search?q=vue+%40keyup.enter.prevent+dosetn+work&oq=vue+%40keyup.enter.prevent+dosetn+work&aqs=chrome..69i57.8760j0j7&sourceid=chrome&ie=UTF-8 -->
  <!-- https://github.com/vuejs/vue/issues/5171 -->
  <!-- https://github.com/sagalbot/vue-select/issues/81 -->
  <!-- https://stackoverflow.com/questions/31070479/prevent-form-submitting-when-pressing-enter-from-a-text-input-using-vue-js -->
  <form
    class="msf"
    @submit.prevent="submitMessageForm(message)"
  >
    <div>
      <!-- <textarea
        :value="message.text"
        @keydown.enter.exact.prevent
        @keydown.enter.shift.exact="createNewLine"
        @input="updateTextareaValue($event)"
        /> -->
      <textarea
        :value="message.text"
        @keyup.enter.exact.prevent="submitMessageForm(message)"
        @input="updateTextareaValue($event.target.value)"
      />
    </div>
    <pre>
      {{ message }}
    </pre>
    <button type="submit">
      ➤
    </button>
  </form>
</template>

<script src="./message-sending-form.module.js"></script>

<style lang="scss" scoped src="./message-sending-form.styles.scss"></style>
