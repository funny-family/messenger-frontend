<template>
  <div class="chats-section">
    <div>
      <NavHeader ref="header" />
      <ChatList />
    </div>
    <main>
      <router-view v-slot="chats">
        <transition
          name="fade-in-down"
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
import { ref, onMounted } from 'vue';

import NavHeader from './components/nav-header';
import ChatList from './components/chat-list';

export default {
  name: 'Chats',
  components: {
    NavHeader,
    ChatList
  },
  setup() {
    const header = ref(null);
    onMounted(() => {
      console.log(header.value);
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
      header
    };
  }
};
</script>

<style scoped>
@import url('./chats.style.css');
</style>
