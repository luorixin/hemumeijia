<template>
  <div class="about-body">
    <div class="about-bg">
      <img style="object-fit: cover" :src="aboutBg" />
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
                采用环保基材：E0/E1级环保板材，利用大 树枝干、树皮、秸秆打碎精
                致成刨花板，树干外层加工 成多层板，木屑加工成密度
                板。极致环保，纯天然板材。
              </p>
              <br />
              <p>
                采用优质部件：众多抽屉规格选择，满足
                设计灵活性及个性化的需求。采用预埋螺母，柜子
                经得起多次拆装。背板以 卡槽结构与侧板连接，更
                好保证强度、防潮防腐、 防止变形。
              </p>
              <br />
              <p>
                优秀设计团队：公司拥有一批资深的专业设 计师，拥有丰富的成功设计
                经验，提供一对一专属个性 定制服务，全面跟踪国际与
                国内主流厂家的开发方向， 让您的生活从此与众不同!
              </p>
              <br />
              <p>
                品牌定位传播：专业提供全系统、全方位、全空间解决方案。改变团
                队、加盟商的命运，共享企业发展红利。整合研发、
                制作、销售、服务一体化产业链。打造健康家居领创品牌。
              </p>
              <br />
              <p style="font-weight: bold">加盟流程:</p>
              <br />
              <p>
                投资咨询 实地考察：向公司电话咨询加盟事 项，到工厂进行实地考
                察，让创业者了解我们 的品牌文化。
              </p>
              <br />
              <p>
                加盟申请 资格审核：投资者申请加盟，公司 总部对投资者提供的资
                料进行审核，审查通过 即可签约。
              </p>
              <br />
              <p>
                展厅设计 总部培训：为投资者量身定制店面 展厅。培训家居顾问，
                包括3D软件设计、定 制流程、营销策略。
              </p>
              <br />
              <p>
                正式营业 售后服务：加盟店接单后，总部提 供量尺、设计、安装、
                售后指导的一站式服务。
              </p>
              <br />
              <p style="font-weight: bold">加盟经营扶持:</p>
              <br />
              <p>
                精准定位：精准选址，利益最大化有针对性的确定目标群体
                避免区域业务摩擦。
              </p>
              <br />
              <p>
                灵活营销：错位经营，不自设障碍换位思考，客户立场想问题
                投其所好，打造个性化产品。
              </p>
              <br />
              <p>
                诚信经营：洽谈期间坦诚相待不隐瞒产品采用真材实料不含糊
                售前售后总部全力协作。
              </p>
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
