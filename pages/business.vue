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
            <h2 class="left_h">招商加盟</h2>
            <div class="contents">
              <p style="font-weight: bold">加盟优势:</p>
              <br />
              <p>
                采用先进机器设备：红泰家居-禾木美家全屋定制生产厂房位于中国西部家具城成都市新都区、成都市家居商场集中地北富生美附近金牛区湾仔路，两大生产家居生产厂区，拥有多条先进的电脑控制的电子开料机，全自动封边机，打孔机等先进的家具加工设备，可大规模实现非标定制化生产，生产效率高，自动化，信息化，精细化三管齐下。
              </p>
              <br />
              <p>
                采用优质部件：采用预埋螺母，柜子经得起多次拆装，背板以卡槽结构与侧板连接，更好保证强度、防潮防腐、防止变形，采用优质五金件，终身维护。
              </p>
              <br />
              <p>
                优秀设计团队：公司拥有一批资深的专业设计师，拥有丰富的成功设计经验，提供一对一专属个性定制服务，全面跟踪国际与国内主流厂家的开发方向，让您的生活从此与众不同。
              </p>
              <br />
              <p style="font-weight: bold">加盟流程:</p>
              <br />
              <p>
                投资咨询
                实地考察：向公司电话咨询加盟事项，到工厂实地考察，让创业者了解公司的品牌文化。
              </p>
              <br />
              <p>
                加盟申请
                资格审核：投资者申请加盟，公司总部对投资者提供的资料进行审核，实地考察，审核通过即可签约。
              </p>
              <br />
              <p>
                展厅设计
                总部培训：投资者必须统一按公司门店风格定制门店风格，指导家居顾问，包括设计软件、定制流程、营销策略。
              </p>
              <br />
              <p>
                正式营业
                售后服务：加盟店接单后，总部提供指导量尺、设计、安装、售后的一站式服务，协助经销商完美交付。
              </p>
              <br />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="6">
          <my-sidebar :active="3"></my-sidebar>
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
    this.$store.commit('SET_MENU', 'business')
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
