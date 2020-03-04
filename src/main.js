import Vue from 'vue'
import App from './App.vue'

import './style/index.scss'
import Roasts from './index'


Vue.use(Roasts)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
