
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n';

// import router from './router'
import AppHeader from './components/Layouts/AppHeader.vue'
import AppHome from './components/Layouts/AppHome.vue'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import "bootstrap-icons/font/bootstrap-icons.css"

const app=createApp(App)

app.use(router);
app.use(i18n);

app.mount('#app')


