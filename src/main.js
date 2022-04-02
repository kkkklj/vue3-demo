import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/index'
const app = createApp(App);

app.use(router);
app.config.globalProperties.$testProp = 'vue3-prop'
app.mount('#app')
