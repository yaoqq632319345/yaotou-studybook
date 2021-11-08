console.log(1);

// import { name } from './test.js'
import { createApp } from 'vue'
import App from './app.vue'
import './index.css'
const vm = createApp(App).mount('#app')
console.log(vm);