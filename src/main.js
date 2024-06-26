import '@splidejs/vue-splide/css'

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueSplide from '@splidejs/vue-splide'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueSplide)
app.mount('#app')
