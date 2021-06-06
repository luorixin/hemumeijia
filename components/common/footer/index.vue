<template>
  <div class="m-footer">
    <div class="footer-con">
      <p>
        CopyRight 2020 All Right Reserved 成都禾木美家定制家具有限公司
        四川全屋定制家居
      </p>
      <p>
        地址：成都市新都区蓉都大道北三段禾木美家全屋定制 电话：18328550119
        邮箱：851836418@qq.com
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
