import { createApp } from 'vue'
import './assets/style/index.css'
import App from './App.vue'
import router from './router'
import iconSvg from './components/IconSvg.vue'
import 'virtual:svg-icons-register'
const app = createApp(App)

app.component('iconSvg', iconSvg)
app.use(router).mount('#app')