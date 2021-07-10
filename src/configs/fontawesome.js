import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faMapMarkedAlt, faPhone)

Vue.component('font-awesome-icon', FontAwesomeIcon)