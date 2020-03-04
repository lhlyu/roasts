<template>
    <div :class="[prefix,cls,`${prefix}-reset`]">
        <div :class="`${cls}-items`">
            <div :class="`${cls}-item`" v-for="(v,i) in datas" :key="i">
                <div :class="`${cls}-item__left`">
                    <div :class="`${cls}-item__left--avatar`">
                        <img :src="v.avatar" :alt="v.name">
                    </div>
                </div>
                <div :class="`${cls}-item__right`">
                    <div :class="`${cls}-item__right--header`">
                        <a href="#">
                            {{v.name}}
                        </a>&nbsp;&nbsp;&nbsp;发布于&nbsp;&nbsp;<Time :time="v.time"></Time>
                        <span :class="[`${prefix}-right`,`${prefix}-theme-color`]">
                             <svg viewBox="0 0 1332 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <path d="M529.066665 273.066666 529.066665 0 51.2 477.866666 529.066665 955.733335 529.066665 675.84C870.4 675.84 1109.333335 785.066665 1280 1024 1211.733335 682.666665 1006.933335 341.333334 529.066665 273.066666"></path>
                            </svg>
                        </span>

                    </div>
                    <div :class="`${cls}-item__right--body`">
                        <p>
                            <a href="">{{v.at}}</a>{{v.content}}
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Time from '../../time'

    import cfg from '../../../config'

    const prefix = cfg.prefix
    const cls = `${prefix}-rail-comment`

    export default {
        name: "RailComment",
        components:{
            Time
        },
        props:{
            datas:{
                type: Array,
                default: () => null
            }
        },
        data(){
            return {
                prefix:prefix,
                cls: cls
            }
        }
    }
</script>
