import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

console.info(
  `[invoice-info] version=${__APP_VERSION__} commit=${__APP_COMMIT__} built=${__APP_BUILD_TIME__}`
)

createApp(App).mount('#app')
