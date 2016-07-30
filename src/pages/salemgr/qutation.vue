<template>
  <div>
    <tab :line-width=1 active-color='#04be02' :index.sync="index">
      <tab-item class="vux-center" :selected="selected === $index" v-for="item in itemlist" @click="selected = $index">{{item}}</tab-item>
    </tab>
      <swiper id="swipecontent" :index.sync="index" :height="xheight|fixheight" :show-dots="false">
        <swiper-item>
        <div class="tab-swiper vux-center" >
          <qutationlist :status="1"></qutationlist>
        </div>
      </swiper-item>
      <swiper-item>
        <div class="tab-swiper vux-center" >
          <qutationlist :status="2"></qutationlist>
        </div>
      </swiper-item>
      <swiper-item>
        <div class="tab-swiper vux-center" >
          <qutationlist :status="3"></qutationlist>
        </div>
      </swiper-item>
      <swiper-item>
        <div class="tab-swiper vux-center" >
          <qutationlist :status="4"></qutationlist>
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
  import QutationList from '../../components/qutation/qutationlist'
  import Vue from 'vue'
  // fixheight filter use in vux swiper to set default height
  Vue.filter('fixheight', (value) => {
    return (window.screen.availHeight - 106) + 'px'
  })

  export default{
    components: {
      'tab': Tab,
      'tab-item': TabItem,
      'swiper': Swiper,
      'swiper-item': SwiperItem,
      'qutationlist': QutationList
    },
    data () {
      return {
        index: 0,
        xheight: '200px',
        selected: 0,
        itemlist: ['未报价', '报价中', '定标中', '已定标']
      }
    }
  }
</script>
