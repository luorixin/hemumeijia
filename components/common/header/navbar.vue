<template>
  <div class="navbar">
    <el-menu
      :default-active="activeIndex"
      class="navbar-menu"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="index"> HOME </el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="about"> ABOUT </el-menu-item>
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
