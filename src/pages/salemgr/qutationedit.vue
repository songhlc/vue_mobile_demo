<template>
  <x-header :left-options="{showBack: true, backText: '返回'}">报价详情</x-header>
  <group>
    <cell>
      <div slot="after-title">
        <span>{{detail.subject}}</span><br>
        <span>询价企业:{{detail.purCorpName}}</span><br>
        <span>截止日期:{{detail.qtexpiredate}}</span>
      </div>
    </cell>
  </group>
  <group v-for="item in detail.quotationOfferDetailArrayList">
    <cell>
      <div slot="after-title">
        <p>{{item.productName}}</p>
        <p v-show="!editable"><span class="c-price">{{ item.price | currency}}</span> <span>/{{item.unit}}</span></p>
      </div>
      <div>
        <x-number  v-show="editable" title="单价:￥" :value.sync="item.price" :min="0" class="nopadding"></x-number>
      </div>
      <div v-show="!editable">
        <span>数量:{{item.amount}}{{item.unit}}</span>
      </div>
      <div v-show="editable" class="m-t-sm">
        <x-number title="数量&nbsp;" :value.sync="item.amount" :min="0" class="nopadding"></x-number>
      </div>
    </cell>
    <cell>
      <div slot="after-title">
        <p class="text-normal">金额: <span>{{ item.price * item.amount | currency}}</span></p>
      </div>
      <button class="weui_btn weui_btn_mini weui_btn_primary weui_btn_plain_primary" @click="editablechange">{{!editable ? '修改' : '完成'}}</button>


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
        detail: {},
        editable: false
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
        service.qutationdetail(this.$route.query.id, this.$route.query.priceid, (response) => {
          this.detail = response.data
        })
      },
      editablechange () {
        this.editable = !this.editable
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
  .vux-number-input{
    font-size: 13px;
  }

</style>
