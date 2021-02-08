<template>
  <div class="chat-window">
    <ScrollableMainLayout>
      <template v-slot:header>
        <ChatWindowNavbar />
      </template>

      <template v-slot:main>
        <main class="chat-window__main">
          <section class="section">
            <div v-for="i in 100" :key="i">
              {{ i }}
            </div>
          </section>
        </main>
      </template>

      <template v-slot:footer>
        <ChatWindowInput />
      </template>
    </ScrollableMainLayout>
  </div>
</template>

<script src="./chat-window.module.js"></script>

<style scoped src="./chat-window.styles.css"></style>
<style scoped src="./chat-window.mobile.styles.css"></style>
<style scoped src="./chat-window.desktop.styles.css"></style>
