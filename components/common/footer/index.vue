<template>
  <div class="m-footer">
    <div class="footer-con">
      <p>
        Copyright © 成都禾木美家定制家具有限公司 2021
        <a style="color: #fff" href="https://beian.miit.gov.cn" target="_blank"
          >蜀ICP备2021015213号-1</a
        >
      </p>
      <p>
        地址：成都市金牛区湾仔路88号红泰.禾木美家高端全屋定制；成都市新都区蓉都大道北三段禾木美家全屋定制<br />
        电话：18328550119 &nbsp;&nbsp;邮箱：851836418@qq.com
      </p>
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
    p {
      margin-bottom: 0.213333rem /* 20/93.75 */;
    }
  }
}
</style>
