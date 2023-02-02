import Vue from 'vue'
import App from './App.vue'
import router from './router'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axiosInstance  from '@/utils/request'
// 全局引入Vuex的store
import store from '@/store/index.js'
Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(elementUI)

// 放到Vue实例里面的可以this.$store 或者 this.$router 在Vue文件引入
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
