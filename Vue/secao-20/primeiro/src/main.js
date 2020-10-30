import { createApp } from 'vue';

import App from './App.vue';
import LoggerMixin from './mixins/logger.js'

const app = createApp(App)

app.mixin(LoggerMixin)

app.mount('#app');
