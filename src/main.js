import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import './index.css'
import router from './router'
import VueI18n  from './languages/plugins/vue-i18n'
const pinia = createPinia()

createApp(App).use(pinia).use(router).use(VueI18n ).mount('#app')
