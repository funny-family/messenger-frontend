// eslint-disable-next-line
import { ref, onMounted, onUnmounted, computed, watchEffect, watch } from 'vue';
import { useRouter } from 'vue-router';

export const setup = () => {
  const router = useRouter();

  // eslint-disable-next-line
  const routeId = computed(() => router.currentRoute.value.params.id);

  const scrollToRef = ref(null);
  // eslint-disable-next-line
  const scrollToBottomOfChatHistory = (domRef) => {
    // eslint-disable-next-line
    domRef.value?.scrollIntoView({
      block: 'center',
      inline: 'center'
    });
  };

  // onMounted(() => {
  //   const scrollToBottomOfChatHistory = () => {
  //     scrollToRef.value.scrollIntoView({
  //       block: 'center',
  //       inline: 'center'
  //     });
  //   };

  //   scrollToBottomOfChatHistory();

  //   watchEffect(() => {
  //     if (!!routeId.value || !routeId.value) {
  //       // console.log(!!routeId.value, !routeId.value);
  //       scrollToBottomOfChatHistory();
  //     }
  //   });

  //   // watch(
  //   //   routeId,
  //   //   (currentRouteId, previousRouteId) => {
  //   //     const isScrollingOnRouteIdChange = (
  //   //       currentRouteId !== previousRouteId ||
  //   //       previousRouteId !== currentRouteId ||
  //   //       !currentRouteId ||
  //   //       !previousRouteId
  //   //     );

  //   //     if (isScrollingOnRouteIdChange) {
  //   //       scrollToBottomOfChatHistory();
  //   //     }
  //   //   }
  //   // );
  // });

  watch(
    routeId,
    (cur, prev) => {
      const t = cur || prev || !cur || !prev;
      console.log(t);
      if (t) {
        scrollToBottomOfChatHistory(scrollToRef);
      }
    }
  );

  onMounted(() => {

    // if (scrollToRef.value) {
    //   scrollToBottomOfChatHistory(scrollToRef);
    // }

    // scrollToBottomOfChatHistory(scrollToRef);

    // watch(routeId, (cur, prev) => {
    //   const t = cur !== prev;
    //   console.log(t);
    //   if (t) {
    //     scrollToBottomOfChatHistory(scrollToRef);
    //   }
    // });

    // watch(
    //   routeId,
    //   (cur, prev) => {
    //     const t = cur || prev || !cur || !prev;
    //     console.log(t);
    //     if (t) {
    //       scrollToBottomOfChatHistory(scrollToRef);
    //     }
    //   }
    // );

    // watchEffect(() => {
    //   console.log(routeId.value);
    //   scrollToBottomOfChatHistory(scrollToRef);
    //   // if (!!routeId.value || !routeId.value) {
    //   //   // console.log(!!routeId.value, !routeId.value);
    //   //   scrollToBottomOfChatHistory(scrollToRef);
    //   // }
    // });
  });

  onUnmounted(() => {
    // scrollToRef.value = null;
  });

  return {
    scrollToRef
  };
};
