import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Si tu utilises Vue Router
import '../css/app.css';


const app = createApp(App);
app.use(router);  // Si tu utilises Vue Router
app.mount('#app');
