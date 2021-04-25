<template>
  <div class="chat-window">
    <ScrollableMainLayout class="chat-window">
      <template v-slot:header>
        <ChatWindowNavbar />
      </template>

      <template v-slot:main>
        <main class="chat-window__main">
          <section class="section">
            <ChatHistory class="chat-window__history" />
          </section>
        </main>
      </template>

      <template v-slot:footer>
        <MessageSendingForm />
      </template>
    </ScrollableMainLayout>
  </div>
</template>

<script src="./chat-window.module.js"></script>

<style scoped src="./chat-window.styles.css"></style>

<style scoped src="./chat-window.mobile.styles.css"></style>

<style scoped src="./chat-window.desktop.styles.css"></style>
