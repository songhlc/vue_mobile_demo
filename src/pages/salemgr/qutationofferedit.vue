<template>
  <x-header :left-options="{showBack: true, backText: '返回'}">报价详情</x-header>
  <group>
    <cell>
      <div slot="after-title">
        <span>询价企业:{{detail.purCorpName}}</span><br>
      </div>
    </cell>
  </group>
  <group v-for="item in detail.quotationOfferDetailArrayList">
    <cell>
      <div slot="after-title">
        <p>{{item.productName}}</p>
        <span class="c-price">{{ item.price | currency}}</span> <span>/{{item.unit}}</span><br>
      </div>
      <div>
        <x-number title="数量&nbsp;" :value.sync="item.amount" :min="0" class="nopadding"></x-number>
      </div>
    </cell>
    <cell>
      <div slot="after-title">
      </div>
      <p>金额: <span>{{ item.price * item.amount | currency}}</span></p>

    </cell>
  </group>
  <tabbar class="edit-footer">
    <flexbox>
      <flexbox-item> <span>订单总金额:</span><span>{{ detail.totalmny | currency}}</span></flexbox-item>
      <flexbox-item><button class="weui_btn weui_btn_primary" @click="commit">提交</button></flexbox-item>
    </flexbox>


    </p>
  </tabbar>
  <toast :show.sync="show" type="text">提价成功!</toast>
</template>
<script>
  import group from 'vux/dist/components/group'
  import cell from 'vux/dist/components/cell'
  import xInput from 'vux/dist/components/x-input'
  import xNumber from 'vux/dist/components/x-number'
  import tabbar from 'vux/dist/components/tabbar'
  import flexbox from 'vux/dist/components/flexbox'
  import flexboxItem from 'vux/dist/components/flexbox-item'
  import xHeader from 'vux/dist/components/x-header'
  import toast from 'vux/dist/components/toast'
  import service from '../../components/qutation/service'

  export default{
    components: {
      group,
      cell,
      xInput,
      xNumber,
      tabbar,
      flexbox,
      flexboxItem,
      xHeader,
      toast
    },
    data () {
      return {
        show: false,
        detail: {}
      }
    },
    ready () {
      this.querydetail()
    },
    methods: {
      commit () {
        this.$data.show = true
      },
      querydetail () {
        service.qutationofferdetail(this.$route.query.id, (response) => {
          this.detail = response.data
      })
      }
    },
    computed: {
      total () {
        return 0
      }
    }
  }
</script>
<style>
  .nopadding{
    padding:0;
  }
  .weui_cells p{
    margin:0;
    font-size: 16px;
  }
  .weui_cells span{
    font-size: 14px;
  }
  .c-price{
    color:#ec3c3c;
  }
</style>
<style>
  .edit-footer{
    z-index: 501;
    height: 62px;
  }
</style>
