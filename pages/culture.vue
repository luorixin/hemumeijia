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
            <h2 class="left_h">企业文化</h2>
            <div class="contents">
              <p>企业愿景：成为定制家居行业服务、管理、技术领先品牌。</p>
              <br />
              <p>企业使命： 提供优质家居产品及服务，改善大众家庭生活空间。</p>
              <br />
              <p>
                企业宗旨：以家居为主业，致力于打造简洁、方便、品质的居家环境
              </p>
              <br />
              <p>核心价值观：关爱·人居·环境</p>
              <br />
              <p>
                经营理念：求实创新、稳健进取、专业规范、亲和诚信、分享成功、奉献社会。
              </p>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="6">
          <my-sidebar :active="1"></my-sidebar>
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
    this.$store.commit('SET_MENU', 'culture')
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
