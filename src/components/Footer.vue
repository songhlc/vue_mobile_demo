<template>
    <tabbar>
      <tabbar-item show-dot v-link="{path:'/home'}">
        <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_msg.png">
        <span slot="label">消息中心</span>
      </tabbar-item>
      <tabbar-item selected v-link="{path:'/salemgr'}">
        <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_article.png">
        <span slot="label">销售管理</span>
      </tabbar-item>
      <tabbar-item v-link="{path:'/my'}">
        <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_cell.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
</template>
<script>
  import Tabbar from 'vux/dist/components/tabbar'
  import TabbarItem from 'vux/dist/components/tabbar-item'
  export default {
    components: {
      'tabbar': Tabbar,
      'tabbar-item': TabbarItem
    }
  }
</script>
