import './assets/scss/app.scss'

import { createApp } from 'vue'
import App from './App.vue'
import AppModal from './components/Modal/AppModal.vue'

const app = createApp(App)

app.component('AppModal', AppModal)
app.mount('#app')
