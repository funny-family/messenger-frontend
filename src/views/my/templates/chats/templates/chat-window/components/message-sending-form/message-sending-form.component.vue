<template>
  <!-- https://www.google.com/search?q=vue+%40keyup.enter.prevent+dosetn+work&oq=vue+%40keyup.enter.prevent+dosetn+work&aqs=chrome..69i57.8760j0j7&sourceid=chrome&ie=UTF-8 -->
  <!-- https://github.com/vuejs/vue/issues/5171 -->
  <!-- https://github.com/sagalbot/vue-select/issues/81 -->
  <!-- https://stackoverflow.com/questions/31070479/prevent-form-submitting-when-pressing-enter-from-a-text-input-using-vue-js -->
  <form
    class="msf"
    @submit.prevent="submitMessageForm(message)"
  >
    <div class="message-input__container">
      <!-- <pre>{{ message }}</pre> -->
      <Textarea
        v-model.trim="message.text"
        class="message-input"
        autoResize
        :initialHeight="22"
        placeholder="Type here..."
        tabindex="0"
        @keydown.enter.exact.prevent
        @keyup.enter.exact="submitMessageForm(message)"
      />
    </div>
    <div class="button-container">
      <div>
        <button type="button">
          @
        </button>
        <button type="button">
          ★
        </button>
        <button type="button">
          ✅
        </button>
      </div>
      <button
        class="subm"
        type="submit"
      >
        Send
      </button>
    </div>
  </form>
</template>

<script src="./message-sending-form.module.js"></script>

<style lang="scss" scoped src="./message-sending-form.styles.scss"></style>

<style lang="scss" scoped src="./message-sending-form.styles.modile.scss"></style>

<style lang="scss" scoped src="./message-sending-form.styles.desktop.scss"></style>
