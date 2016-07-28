<template>
  <div id='msgcenter'>
    <tab :line-width="1">
      <tab-item :selected="selected === $index" v-for="item in itemlist" @click="selected = $index">{{item}}</tab-item>
    </tab>
    <swiper :index.sync="selected" :show-dots="false">
      <swiper-item>
        <div class="tab-swiper vux-center" >
          <p>精选1 Container</p>
          <p>精选1 Container</p>
        </div>
      </swiper-item>
      <swiper-item>
        <div class="tab-swiper vux-center" >
          <p>精选1 Container</p>
          <p>精选2 Container</p>
          <p>精选3 Container</p>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
  import Tab from 'vux/dist/components/tab'
  import TabItem from 'vux/dist/components/tab-item'
  import Swiper from 'vux/dist/components/swiper'
  import SwiperItem from 'vux/dist/components/swiper-item'

  export default {
    components: {
      'tab': Tab,
      'tab-item': TabItem,
      'swiper': Swiper,
      'swiper-item': SwiperItem
    },
    data () {
      return {
        selected: 0,
        itemlist: ['询价中', '消息']
      }
    }
  }
</script>
<style scoped>
  .vux-slider>.vux-swiper>.vux-swiper-item{
    position: fixed;
    top:44px;
  }
</style>
