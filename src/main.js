import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
import axios from 'axios';

Vue.use(ElementUI);
Vue.prototype.$http = axios;
axios.defaults.baseURL = 'http://127.0.0.1:9001'
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')