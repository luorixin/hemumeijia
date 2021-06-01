<template>
  <div class="m-header">
    <div class="hleft">
      <logo></logo>
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
export default {
  components: {
    Logo,
    tools
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
