<template>
  <div class="chats-page">
    <nav
      class="chats-page__chats-navbar"
      :class="{
        'hidden-chat-page-block-on-mobile': chatId
      }"
    >
      <ChatHeader class="chats-page__chat-header" />
      <ChatList class="chats-page__chat-list" />
    </nav>

    <main
      class="chats-page__chat-window"
      :class="{
        'hidden-chat-page-block-on-mobile': !chatId
      }"
    >

      <section
        class="hidden-chat-page-block-on-mobile"
        :class="{
          'chats-page__chat-window-info': !chatId,
          'hidden-chat-page-block-on-desktop': chatId
        }"
      >
        <h2>Selete chat to start messaging.</h2>
      </section>

      <router-view v-slot="chats">
        <transition
          name=""
          mode="out-in"
        >
          <!-- <keep-alive> -->
            <component :is="chats.Component" />
          <!-- </keep-alive> -->
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script>
import {
  useRoute
} from '@/router';

import {
  ref,
  watchEffect
} from 'vue';

import ChatHeader from './components/chat-header';
import ChatList from './components/chat-list';

export default {
  name: 'Chats',
  components: {
    ChatHeader,
    ChatList
  },
  setup() {
    const route = useRoute();

    // const header = ref(null);
    // const main = ref(null);
    // onMounted(() => {
    //   console.log(header.value);
    //   console.log(main.value);
    // });

    const chatId = ref(null);
    watchEffect(() => {
      chatId.value = route.params.id;
    });

    // const sticky = header.value.offsetTop;
    // function myFunction() {
    //   if (window.pageYOffset > sticky) {
    //     header.value.classList.add('sticky');
    //   } else {
    //     header.value.classList.remove('sticky');
    //   }
    // }
    // window.onscroll = () => { myFunction(); };

    return {
      chatId
    };
  }
};
</script>

<style scoped src="./chats.styles.css"></style>
<style scoped src="./chats.modile.styles.css"></style>
<style scoped src="./chats.desktop.styles.css"></style>
