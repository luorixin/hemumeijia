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
            <h2 class="left_h">产品优势</h2>
            <div class="contents">
              <p>
                禾木美家全屋定制，整合家居家装资源，以顶级设计师
                一对一提供空间设计服务，
                提供全屋定制解决方案，真正实现一体化设计、一站式
                挑选、一揽子服务，一站式 解决设计、选材、安装、维
                护等问题，个性化定制你的 爱家，为你省钱，呵护你的健康。
              </p>
              <br />
              <p>金蝶erp信息化系统助力产品交期与产品品质高质量的交付</p>
              <br />
              <p>
                随着科技的进步与物联网的发展，数字化管理是企业发展的重要趋势，通过运用现代数字信息技
                术，我们可以逐步建立沟通快捷、分工明确、责任到位、反应快速、处置及时、高效运转的监管
                机制，全面提高供应链的竞争力，提高企业管理效率，降低企业经营成本。
              </p>
              <br />
              <p>
                禾木美家作为全屋定制行业的头部企业，一直提倡科技化，数字化，精准化管理模式，无论
                是营销流程、业务数据、生产流程还是质量管理都实现了这一目标，
                2020金蝶erp系统的落地促
                进了，禾木美家全屋定制数字化的管理模式的进一步发展，使公司管理更加游刃有余，在产品交
                期和产品品质上为我们的客户交出了一份更完美的答卷，我们会继续在企业管理和技术创新的路
                上不断探索，禾木美家，不负每一份信赖!
              </p>
              <br />
              <p>专业高效：强大的设计师团队。</p>
              <br />
              <p>节省开支：合理的设计为你省钱。</p>
              <br />
              <p>绿色环保：E0、E1级环板材多种 材质选择。</p>
              <br />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="6">
          <my-sidebar :active="2"></my-sidebar>
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
    this.$store.commit('SET_MENU', 'feature')
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
