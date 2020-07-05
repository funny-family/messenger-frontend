<template>
  <div>
    <form>
      <Auth-input
        v-model="testVar"
      />
      <button type="submit">test</button>
      <!-- <button type="button" @click="getVat">Get var!</button> -->
    </form>
  </div>
</template>

<script>
import AuthInput from '@/components/test/TestInput1.vue';

export default {
  components: {
    'Auth-input': AuthInput
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
