<template>
  <div class="header-logo">
    <nuxt-link to="/">
      <img src="~/static/img/logo.png" alt="logo" />
    </nuxt-link>
  </div>
</template>

<style lang="scss">
.header-logo {
  height: 100%;
  width: 2.133333rem /* 200/93.75 */;
  line-height: 0.448rem /* 42/93.75 */;
  margin-right: 0.533333rem /* 50/93.75 */;
  display: flex;
  a {
    display: inline-block;
    // width: 1.109333rem /* 104/93.75 */;
    height: 0.448rem /* 42/93.75 */;
    padding: 0;
    // border-right: 1px solid #dfdfdf;
    text-align: center;
    vertical-align: middle;
    img {
      display: inline-block;
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
  label {
    font-size: 14px;
    line-height: 0.448rem /* 42/93.75 */;
    height: 0.448rem /* 42/93.75 */;
  }
}
</style>
