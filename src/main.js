import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'materialize-css/dist/css/materialize.min.css'
import 'aterial-design-icons-iconfont/dist/material-design-icons.css'

createApp(App).use(store).use(router).mount('#app')
