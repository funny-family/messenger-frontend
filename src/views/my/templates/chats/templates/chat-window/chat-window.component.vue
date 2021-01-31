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

<style scoped>
@import url('./chat-window.styles.css');
</style>
