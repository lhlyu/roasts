<template>
  <div id="app">
<!--    <div class="bg">-->

<!--    </div>-->
    <div class="demo1">
      <RailBoard :total="10" :maxlength="10" :isLogin="islogin" @login="islogin=true"></RailBoard>
      <br>
      <RailComment :datas="datas"></RailComment>
    </div>
  </div>
</template>

<script>

    let randomString = len => {
        len = len || 32;
        var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
        var maxPos = $chars.length;
        var pwd = '';
        for (let i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    }

    export default {
        name: 'App',
        components: {

        },
        data(){
            return {
                islogin: false,
                datas:[]
            }
        },
        mounted() {
            let items = []
            for (let i = 0; i < 10; i++) {
                let item = {
                    name: randomString(8),
                    avatar: `https://www.thiswaifudoesnotexist.net/example-${Math.ceil(Math.random() * 10000 + 60000)}.jpg`,
                    time: +new Date() - Math.ceil(Math.random() * 1000000000 + 1) * (i + 1),
                    at: `@${randomString(8)}`,
                    content: `使用 typora 也快一年了之前一直使用 VS Code 写 .md。使用 typora 导出的 .pdf 排版是比较完美的，（自己会保存一些优秀的文章为 .md 并导出 .pdf 方便存档，所以 typora 是必须的。

最僵硬的就是 typora 没有 markdown 语法检查和格式化，写完 .md 之后，用 VS Code 打开就是一堆语法错误警告，强迫症受不了😌，所以不得不用再用 markdownlint 格式化一下，太麻烦了，有时候想掀桌儿😂。

不过还好，typora 也就几种常见的语法警告，使用 shell 很方便地就能替换掉😂

也开始使用 gitbook 来整理笔记啦`
                }
                items.push(item)
            }
            this.datas = items
        }

    }
</script>

<style lang="scss">

  *{
    margin: 0;
    padding: 0;
  }
  body{

  }
  #app {
    font-family: Fira Mono,"Noto Serif SC",-apple-system,Roboto,Helvetica Neue,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    color: #2c3e50;

  }
  .bg{
    background: url("https://cdn.jsdelivr.net/gh/lhlyu/pb@master/b/12.jpg");
    background-size: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
    &:after{
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      background: rgba(#ffffff,0.6);
    }
  }
  .demo1{
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    padding: 10px;
    box-sizing: border-box;
  }
</style>
