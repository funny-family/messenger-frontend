<template>
  <div>
    <!-- <form novalidate> -->
    <form @submit.prevent>
      <input placeholder="not-password" type="not-password" />
      <hr>
      <div>
        <div><b>Reset input</b></div>
        <Auth-input
          type="text"
          placeholder="Test text"
          v-model="testVar"
        />
      </div>
      <div>
        <div><b></b></div>
        <Password-input
          type="password"
          placeholder="Test password"
          v-model="testPas"
        />
      </div>
      <hr />
      <Test-input-2 />
      <Test-button-1>Test submit</Test-button-1>
      <!-- <button type="submit" formnovalidate>test</button> -->
      <!-- <button type="submit">test</button> -->
      <!-- <button type="button" @click="getVat">Get var!</button> -->
    </form>
    <hr>
    <form class="test-submit-form" @submit.prevent="getValues">
      <input
        type="text"
        placeholder="First value to test..."
        v-model="testValues.value1"
        required
      />
      <input
        type="text"
        placeholder="Second value to test..."
        v-model="testValues.value2"
        required
      />
      <button type="submit">Test it!!!</button>
    </form>
    <hr>
    <button @click="getLogState">get log state</button>
    <hr>
    <button @click="showTest" autofocus>TEST</button>
  </div>
</template>

<script>
import AuthInput from '@/components/test/TestInput1.vue';
import TestInput2 from '@/components/test/TestInput2.vue';
import TestButton1 from '@/components/test/TestButton1.vue';
import PasswordInput from '@/components/test/TestPassowrdInput1.vue';

// import { mapActions } from 'vuex';

export default {
  components: {
    'Auth-input': AuthInput,
    'Test-input-2': TestInput2,
    'Test-button-1': TestButton1,
    'Password-input': PasswordInput
  },
  data: () => ({
    testVar: '',
    testPas: '',
    mInp: '',
    testValues: {
      value1: '',
      value2: ''
    }
  }),
  methods: {
    getValues() {
      console.log('DATA FROM COMPONENT:', this.$data.testValues);
      // this.$store.dispatch('getValues', this.$data.testValues);
    },
    // ...mapActions('getValues'),
    getVat() {
      console.log(this.$data.testVar);
    },
    getLogState() {
      console.log('just sate', this.$store.state);
      console.log('Is user logged in?', this.$store.state.auth.isUserLoggedIn);
    },
    showTest() {
      console.log('TEST');
    }
  }
};
</script>

<style scoped>
.test-submit-form {
  border: 1px solid red;
}
</style>
