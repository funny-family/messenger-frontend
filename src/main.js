import { createApp } from 'vue';
import { router } from './router';
import { store } from './store';
import App from './app';

const app = createApp(App);

app.use(router);
router.app = app;
// router.isReady().then(() => app.mount('#app'));

app.use(store);

app.mount('#app');
