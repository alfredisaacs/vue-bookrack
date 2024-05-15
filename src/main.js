import { createApp } from 'vue'
import { firebaseApp } from './firebase'
import { createPinia } from 'pinia'
import router from './router'
import './style.css'
import App from './App.vue'

const db = firebaseApp
const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')
