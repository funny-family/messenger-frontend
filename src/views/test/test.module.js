import { ref, onMounted } from 'vue';

import { ElScrollbar } from 'element-plus';
import 'element-plus/lib/theme-chalk/el-scrollbar.css';

import ScrollableMainLayout from '../../components/scrollable-main-layout';

// import ScrollbarProvider from '../../components/scrollbar-provider1';

export default {
  name: 'Test',
  components: {
    ScrollableMainLayout,
    ElScrollbar
    // ScrollbarProvider
  },
  setup() {
    const mainRef = ref(null);
    onMounted(() => {
      mainRef.value.refs.main.value.scrollTo(
        mainRef.value.refs.main.value.scrollHeight,
        mainRef.value.refs.main.value.scrollHeight
      );
    });

    return {
      mainRef
    };
  }
};
