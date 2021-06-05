<template>
  <div class="mytools">
    <!-- <freetry type="primary">登陆</freetry> -->
    <span @click="visible = !visible" class="more el-icon-s-fold"></span>
    <el-collapse-transition>
      <el-menu
        :default-active="activeIndex"
        class="navbar-menu vertical"
        v-show="visible"
        @select="handleSelect"
      >
        <el-menu-item index="/">网站首页</el-menu-item>
        <el-menu-item index="about">
          <template slot="title">公司概况</template>
        </el-menu-item>
        <el-submenu index="product">
          <template slot="title">产品中心</template>
          <el-menu-item index="product/livingRoom">客厅</el-menu-item>
          <el-menu-item index="product/kitchen">厨房</el-menu-item>
          <el-menu-item index="product/bedroom">卧室</el-menu-item>
          <el-menu-item index="product/study">书房</el-menu-item>
        </el-submenu>
        <el-menu-item index="feature">产品优势</el-menu-item>
        <el-menu-item index="culture">企业文化</el-menu-item>
        <el-menu-item index="business">招商加盟</el-menu-item>
        <el-menu-item index="concat">联系我们</el-menu-item>
      </el-menu>
    </el-collapse-transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  computed: {
    activeIndex() {
      return this.$store.state.currentMenu
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      this.visible = false
      const prefix = key === '/' ? '' : '/'
      this.$router.replace({
        path: prefix + key
      })
    }
  }
}
</script>

<style scoped lang="scss">
.mytools {
  align-items: center;
  display: none;
  .more {
    font-size: 0.32rem /* 30/93.75 */;
    cursor: pointer;
  }
}
.navbar-menu.vertical {
  position: fixed;
  z-index: 1000;
  right: 0;
  top: 0.64rem !important;
  left: 0;
  width: 100% !important;
  height: 3.2rem /* 300/93.75 */;
  overflow: auto;
}
</style>
