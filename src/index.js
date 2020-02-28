import Roasts from './packages/roasts/index'

// 支持<script>引入
if (typeof  window !== "undefined" && window.Vue){
  window.Vue.component(Roasts.name, Roasts)
}

// 支持Vue全局安装
Roasts.install = Vue => Vue.component(Roasts.name,Roasts)

export default Roasts
