import { ref, onMounted } from 'vue';

export default {
  name: 'ResizableContainer',
  setup() {
    const resizableContainer = ref(null); // ref

    onMounted(() => {
      console.log(resizableContainer.value);
    });

    return {
      resizableContainer
    };
  }
};
