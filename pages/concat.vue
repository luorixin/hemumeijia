<template>
  <div class="about-body">
    <div class="about-bg">
      <el-image lazy :src="aboutBg" fit="cover"></el-image>
    </div>
    <div class="about-con container">
      <el-row :gutter="30">
        <el-col
          :xs="24"
          :sm="24"
          :md="16"
          :lg="18"
          :xl="18"
          style="float: right"
        >
          <div class="about-box">
            <h2 class="left_h">联系我们</h2>
            <div class="contents">
              <p>联系人：王先生</p>
              <br />
              <p>手机：18328550119</p>
              <br />
              <p>电话：028-84456078</p>
              <br />
              <p>联系地址1：成都市金牛区湾仔路88号红泰.禾木美家高端全屋定制</p>
              <br />
              <p>联系地址2：成都市新都区蓉都大道北三段禾木美家全屋定制</p>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="6">
          <my-sidebar :active="4"></my-sidebar>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import MySidebar from '../components/common/sidebar/index'
import store from '~/store/index'
export default {
  components: {
    MySidebar
  },
  beforeCreate() {
    this.$store.commit('SET_MENU', 'concat')
  },
  data() {
    return {
      aboutBg: '/img/aboutBg.jpg'
    }
  }
}
</script>

<style scoped lang="scss">
.about-body {
  position: relative;
  .about-bg {
    width: 100%;
    // height: 2.733333rem /* 350/93.75 */;
    margin-top: 0.64rem /* 60/93.75 */;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .about-con {
    position: relative;
    margin-bottom: 0.32rem /* 30/93.75 */;
    // margin-top: 0.373333rem /* 35/93.75 */;
    .about-box {
      clear: both;
      padding-top: 0.106667rem /* 10/93.75 */;
      .left_h {
        font-size: 0.234667rem /* 22/93.75 */;
        display: block;
        padding: 0 0 0.106667rem /* 10/93.75 */ 0;
        color: #2c2b2b;
      }
      .contents {
        clear: both;
        padding: 0.16rem /* 15/93.75 */ 2px 0px 2px;
        line-height: 0.298667rem /* 28/93.75 */;
        overflow: auto;
        p {
          color: rgb(0, 0, 0);
          font-size: 0.192rem /* 18/93.75 */;
          font-family: 'sans serif', tahoma, verdana, helvetica;
          text-indent: 2em;
        }
      }
    }
    .left_nav {
      padding-top: 0.426667rem /* 40/93.75 */;
    }
  }
}
</style>
