import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import '@/styles/tailwind.css'
import '@/styles/index.css'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)


// 5. 创建并挂载根实例
app.use(router)
app.mount('#app')
app.use(pinia)