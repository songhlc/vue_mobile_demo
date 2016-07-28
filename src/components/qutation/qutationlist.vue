<template>
  <div id="qutationlist" class="list-ctn">
    <slot></slot>
    <group v-for="item in list" >
      <cell :inline-desc="'截止时间:'+item.qtexpiredate">
        <span slot="after-title">
          <span class="vux-badge">{{item | statusfilter}}</span>
          <span>{{item.subject}}</span><br>
          <span class="vux-label-desc">{{item.enterpriseName}}</span>
        </span>
        <div>
          <button v-link="{path:'/qutationedit?id='+item.id}" class="weui_btn weui_btn_mini weui_btn_primary weui_btn_plain_primary" v-show="item | expiredate 'item.status'">
            报价
          </button>
          <button v-link="{path:'/qutationedit?id='+item.priceOfferid}" class="weui_btn weui_btn_mini weui_btn_primary weui_btn_plain_primary" v-show="item.qtexpiredateStatus==0&&item.priceCommit==2">
            修改
          </button>
        </div>
      </cell>
      <cell :title="item.stateReason" v-show="item.state==3">
      </cell>
    </group>
    <button class="padding-md btn-more" @click="query">{{querymore}}</button>
  </div>
</template>
<script>
  import cell from 'vux/dist/components/cell'
  import group from 'vux/dist/components/group'
  import badge from 'vux/dist/components/badge'
  import service from './service'
  import Vue from 'vue'

  // 如果截止时间大于当前时间,则不允许报价
  Vue.filter('expiredate', (value, status) => {
    let expiredate = new Date(value.qtexpiredate)
    let now = new Date()
    return ((expiredate - now) > 0) && (value.status === '1')
  })
  Vue.filter('statusfilter', (item) => {
    let status = item.priceStatus ? item.priceStatus : '待报价'
    let expiredate = new Date(item.qtexpiredate)
    let now = new Date()
    if ((expiredate - now) > 0 || item.priceStatus) {
      return status
    } else {
      return '报价已截止'
    }
  })

  export default {
    components: {
      cell,
      group,
      badge
    },
    ready () {
      // state 0: 待报价;state 1:报价中
      // this.list = [{title: '1', value: '2'}]
      this.query()
    },
    methods: {
      query () {
        service.qutationlist(this.status, this.pageIndex, 10, (response) => {
          if (response.issuccess) {
            this.list = this.list.concat(response.data)
            this.pageIndex++
          } else {
            this.querymore = '加载完毕'
          }
        })
      }
    },
    props: {
      list: {
        type: Array,
        default () {
          return []
        }
      },
      status: {
        type: Number,
        default: '0'
      }
    },
    data () {
      return {
        pageIndex: 0,
        querymore: '加载更多'
      }
    }
  }
</script>
<style scoped>
  .list-ctn{
    width: 10rem;
  }
  .toast-ctn{
    position: fixed;
  }
</style>
<style>
  #qutationlist p{
    margin:0;
  }
  #qutationlist .weui_cells{
    margin-top:0;
  }
  .vux-slider>.vux-swiper>.vux-swiper-item{
    overflow: auto;
  }
  .padding-md{
    padding:10px
  }
  .btn-more{
    text-align: center;
    font-size: 14px;
    width: 100%;
  }
  .weui_cells{

  }
</style>
