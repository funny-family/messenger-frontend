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
      <hr />
      <Test-input-2 />
      <Test-button-1>Test submit</Test-button-1>
      <!-- <button type="submit" formnovalidate>test</button> -->
      <!-- <button type="submit">test</button> -->
      <!-- <button type="button" @click="getVat">Get var!</button> -->
    </form>
  </div>
</template>

<script>
import AuthInput from '@/components/test/TestInput1.vue';
import TestInput2 from '@/components/test/TestInput2.vue';
import TestButton1 from '@/components/test/TestButton1.vue';

export default {
  components: {
    'Auth-input': AuthInput,
    'Test-input-2': TestInput2,
    'Test-button-1': TestButton1
  },
  data: () => ({
    testVar: ''
  }),
  methods: {
    getVat() {
      console.log(this.$data.testVar);
    }
  }
};
</script>

<style scoped>

</style>
