<template>
  <ul>
    <li>
      <a class="tab-item icon-qutation"  v-link="{ path: '/qutation'}">
        <span class="icon fa fa-cny fa-2x"></span>
      </a>
      <p>报价管理</p>
    </li>
    <li>
      <a class="tab-item icon-saleorder" @click="notimplement">
        <span class="icon fa fa-list-alt fa-2x"></span>
      </a>
      <p>销售订单</p>
    </li>
    <li>
      <a class="tab-item icon-delivery" @click="notimplement">
        <span class="icon fa fa-truck fa-2x"></span>
      </a>
      <p>发货管理</p>
    </li>
    <li>
      <a class="tab-item icon-inbound"  @click="notimplement">
        <span class="icon fa fa-inbox fa-2x"></span>
      </a>
      <p>入库查询</p>
    </li>
    <li>
      <a class="tab-item icon-receiver" @click="notimplement">
        <span class="icon fa fa-cloud-download fa-2x"></span>
      </a>
      <p>收货查询</p>
    </li>
    <li>
      <a class="tab-item icon-invoice" @click="notimplement">
        <span class="icon fa fa-ticket fa-2x"></span>
      </a>
      <p>发票查询</p>
    </li>
    <li>
      <a class="tab-item icon-payment"  @click="notimplement">
        <span class="icon fa fa-credit-card fa-2x"></span>
      </a>
      <p>付款查询</p>
    </li>
  </ul>
  <toast :show.sync="show" type="text">敬请期待!</toast>
</template>
<script>
  import toast from 'vux/dist/components/toast'
  export default {
    data () {
      return {
        show: false
      }
    },
    methods: {
      notimplement () {
        this.$data.show = true
        // layer.open({type:1,content: '敬请期待',style:" padding: 10px 20px;border-radius: 6px;color:#ff402c"});
      }
    },
    components: {
      'toast': toast
    }
  }
</script>
<style scoped>
  ul{
    width:10rem;
  }
  li{
    width: 3.33rem;
    height: 2.5rem;
    float: left;
    text-align: center;
    margin-top: 0.5rem;
  }
  ul li a{
    display: block;
    margin: 0 auto;
    width: 1.6rem;
    height: 1.6rem;
    background: pink;
    border-radius: 50%;
    padding: 0;
  }
  ul li a span {
    line-height: 1.6rem;
    color: #fff;
  }
  p{
    color: #2e2e2e;
    margin-top: 10px;
    font-size: 14px;
  }
  .icon-qutation{
    background-color:#FFB13A;
  }
  .icon-saleorder{
    background-color:#FC6C01;
  }
  .icon-delivery{
    background-color:#48C98B;
  }
  .icon-receiver{
    background-color:#94D301;
  }
  .icon-inbound{
    background-color:#3CBAFF;
  }
  .icon-invoice{
    background-color:#31D2EA;
  }
  .icon-payment{
    background-color:#F35959;
  }
</style>
