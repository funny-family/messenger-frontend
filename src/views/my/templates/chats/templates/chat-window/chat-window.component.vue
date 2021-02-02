<template>
  <div class="chat-window">
    This current chat id: {{ $route.params.id }}
  </div>
</template>

<script>
export default {
  name: 'ChatWindow'
};
</script>

<style scoped src="./chat-window.styles.css"></style>
<style scoped src="./chat-window.mobile.styles.css"></style>
<style scoped src="./chat-window.desktop.styles.css"></style>
