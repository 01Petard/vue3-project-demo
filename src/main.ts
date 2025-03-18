import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from "pinia";
import mitt from "@/utils/emitter.ts";


const app = createApp(App)
app.use(router)
app.mount('#app')
const pinia = createPinia()
app.use(pinia)
