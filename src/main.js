import './assets/styles/styles.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import Vuelidate from 'vuelidate';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Vuelidate);

app.mount('#app');
