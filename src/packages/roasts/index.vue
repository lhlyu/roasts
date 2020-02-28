<template>
    <div class="roast roasts-reset">
      <div class="roast-header">
          <p>这是一个测试</p>
      </div>
      <div class="roast-comments">

      </div>
    </div>
</template>

<script>
    export default {
        name: "Roasts",
        props:{
          datas:{
            type: Array,
            default: () => {
              return []
            }
          },
          opts:{
            type: Object,
          }
        },
        data(){
          return {
            _opts:{
              themeColor: "#6190E8"
            }
          }
        },
        mounted() {
          console.log(this._opts,this.opts)
          Object.assign(this._opts,this.opts)
          let dom = document.querySelector(".roasts-reset")
          dom.style.setProperty("--themeColor",this._opts.themeColor)
        },

    }
    /**
     1. 评论置顶



     */
</script>

<style>

</style>
