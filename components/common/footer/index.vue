<template>
  <div class="m-footer">
    <el-image fit="fill" class="footer-img" :src="codeImg" />
    <div class="footer-con">
      iAdmanager
      是爱点击集团旗下智能广告投放管家，整合了腾讯广告、快手两大媒体平台，通过数据化、自动化和智能化的方式，实现高效投放、精准数据分析、实时监测预警、智能辅助优化等诸多功能，提升广告运营的效率与效果。
    </div>
  </div>
</template>

<script>
export default {
  name: 'myFooter',
  data: () => {
    return {
      codeImg: '/img/parllay营销自动化二维码.jpg'
    }
  }
}
</script>

<style scoped lang="scss">
.m-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  .footer-img {
    width: 1.557333rem /* 146/93.75 */;
    height: 1.557333rem /* 146/93.75 */;
    margin-right: 0.853333rem /* 80/93.75 */;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .footer-con {
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #ffffff;
    letter-spacing: -0.34px;
    text-align: center;
    line-height: 25px;
    width: 7.786667rem /* 730/93.75 */;
  }
}
</style>
