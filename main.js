
import { createApp } from 'vue'
import App from './src/App.vue'
import router from './src/router'
// import router from './src/router'
import AppHeader from './src/components/Layouts/AppHeader.vue'
import AppHome from './src/components/Layouts/AppHome.vue'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import "bootstrap-icons/font/bootstrap-icons.css"
const app=createApp(App)
app.use(router);
app.mount('#app')


