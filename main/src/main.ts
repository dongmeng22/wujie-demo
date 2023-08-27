import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import WuJieVue3 from 'wujie-vue3'

const app = createApp(App)

app.use(router).use(WuJieVue3)

app.mount('#app')
