<template>
  <div class="navbar">
    <el-menu
      :default-active="activeIndex"
      class="navbar-menu"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="index">网站首页</el-menu-item>
      <el-submenu index="about">
        <template slot="title">公司概况</template>
        <el-menu-item index="about">关于我们</el-menu-item>
        <el-menu-item index="culture">企业文化</el-menu-item>
      </el-submenu>
      <el-submenu index="product">
        <template slot="title">产品中心</template>
        <el-menu-item index="sf">书房</el-menu-item>
        <el-menu-item index="dsg">电视柜</el-menu-item>
        <el-menu-item index="wsjj">卧室家具</el-menu-item>
      </el-submenu>
      <el-menu-item index="news">新闻中心</el-menu-item>
      <el-menu-item index="feature">产品优势</el-menu-item>
      <el-menu-item index="concat">联系我们</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    activeIndex() {
      return this.$store.state.currentMenu
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push({
        name: key
      })
    }
  }
}
</script>

<style scoped lang="scss">
.navbar {
  margin-left: 20px;
  .navbar-menu {
    border-bottom: none;
    background: transparent !important;
    /deep/ .el-menu-item,
    /deep/ .el-submenu__title {
      background: transparent !important;
    }
  }
}
</style>
