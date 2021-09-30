import Vue from 'vue'
import App from './App.vue'
// import "@/configs/bootstrap-vue.js"
import { BootstrapVue } from 'bootstrap-vue'

import "@/configs/fontawesome.js"

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
}).$mount('#app')
