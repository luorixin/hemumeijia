<template>
  <div class="m-header">
    <div class="hleft">
      <logo></logo>
      <navbar />
    </div>
    <div class="hright">
      <tools></tools>
    </div>
  </div>
</template>

<script>
import Logo from '../../Logo.vue'
import navBar from './navbar.vue'
import tools from './tools.vue'
import navbar from './navbar.vue'
export default {
  components: {
    Logo,
    tools,
    navbar
  }
}
</script>

<style lang="scss">
.m-header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .hleft {
    display: flex;
    align-items: center;
  }
}
</style>
