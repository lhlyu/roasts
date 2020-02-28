<template>
  <div id="app">
    <Roasts></Roasts>
  </div>
</template>

<script>

  import Roasts from './packages/roasts/index'

  export default {
    name: 'app',
    components:{
      Roasts
    }
  }
</script>

<style lang="scss">
  @import './style/index';
</style>
