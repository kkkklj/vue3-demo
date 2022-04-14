import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/index'
import store from './store/index'
// import { ElButton } from 'element-plus'
const app = createApp(App);

// [ElButton].map(item => {
//   app.use(item)
// })
app.use(router);
app.use(store);

app.config.globalProperties.$testProp = 'vue3-prop'
app.mount('#app')
