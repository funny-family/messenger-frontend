<template>
  <header class="header">
      <router-link
        class="link"
        to="/"
      >
        <div class="header__logo">Chatus</div>
      </router-link>
    <div class="header__page-links">
      <router-link
        class="link"
        to="/signin"
        v-if="this.$store.state.auth.isUserLoggedIn === false"
      >
        Sign in
      </router-link>
      <router-link
        class="link"
        to="/signup"
        v-if="this.$store.state.auth.isUserLoggedIn === false"
      >
        <MultiButton
          type="button"
          :formnovalidate="true"
        >
          Sign up
        </MultiButton>
      </router-link>
      <form
        class="link"
        @submit.prevent="signOut"
      >
        <MultiButton
          type="button"
          :formnovalidate="true"
        >
          Sign out
        </MultiButton>
      </form>
    </div>
  </header>
</template>

<script>
import MultiButton from '@/components/buttons/MultiButton.vue';

import { mapActions } from 'vuex';

export default {
  components: {
    MultiButton
  },
  methods: {
    ...mapActions(['signOut'])
  }
};
</script>

<style scoped>
.header {
  display: flex;
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  background: white;
  -webkit-box-shadow: 0px 10px 19px -8px rgba(0,0,0,0.30);
  -moz-box-shadow: 0px 10px 19px -8px rgba(0,0,0,0.30);
  box-shadow: 0px 10px 19px -8px rgba(0,0,0,0.30);
}

.header__logo {
  font-weight: bold;
  padding: 0 20px;
}

.link {
  display: inline-block;
  padding: 0 12px;
}
</style>
