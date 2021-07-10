import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faMapMarkedAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)