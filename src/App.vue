<template>
  <div>
    <router-view></router-view>
    <myfooter></myfooter>
  </div>
</template>

<script>
import Footer from './components/Footer'

export default {
  components: {
    'myfooter': Footer
  },
  ready () {
    //  重新计算html的字体大小保证使用rem进行设置高宽
    let basefontsize = window.screen.width / 10 + 'px'
    let bodyel = document.getElementsByTagName('html')[0]

    if (bodyel.style.fontSize !== basefontsize) {
      bodyel.style.fontSize = basefontsize
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  font-size: 13px;
  margin:0;
  padding:0;
  background-color: #fbf9fe
}

#app {
  color: #2c3e50;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  width: 10rem;
}

#app a {
  text-decoration: none;
}
  ul{
    padding:0;
    margin:0;
    list-style: none;
  }
  .m-t-sm{
    margin-top:5px;
  }
  .m-t-md{
    margin-top: 10px;
  }
.text-normal{
  font-size: 13px !important;
}
.text-larger{
  font-size:15px !important;
}
.text-big{
  font-size: 17px !important;
}
</style>
<style>
  @import '~vux/dist/vux.css';
  @import 'vendor/font-awesome-4.5.0/css/font-awesome.min.css';
  @import 'css/vuxfix.css';
</style>
