import RailBoard from './components/rail/board'
import RailComment from './components/rail/comment'

const components = [
    RailBoard,
    RailComment
]

const install = Vue => {
    if(install.installed){
        return
    }
    components.map(c => {
        Vue.component(c.name,c)
    })
}

if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue)
}

export default {
    install,
    RailBoard,
    RailComment
}
