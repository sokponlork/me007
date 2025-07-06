import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Imports your Vue Router configuration

// Import your main CSS file (which now includes Tailwind CSS)
import './assets/main.css'

// Import Font Awesome CSS (since it's installed via NPM)
import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App)

app.use(router) // Use Vue Router for navigation

app.mount('#app') // Mount your main App component to the #app div in index.html
