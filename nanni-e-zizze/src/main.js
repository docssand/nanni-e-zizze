import Vue from 'vue'
import App from './App.vue'
import "@/configs/bootstrap-vue.js"
import "@/configs/fontawesome.js"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
