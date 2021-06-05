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
            <h2 class="left_h">关于我们</h2>
            <div class="contents">
              <p>
                &nbsp; &nbsp;&nbsp;禾木美家全屋定制，是专业的定制家具企业，自
                创立以来就以The creator of the comfortable
                room(惬意空间的创造者)为己任，致力于用
                原创设计，为千千万万消费者家庭定制舒适、环 保、便捷的定制家具。
              </p>
              <br />
              <p>
                &nbsp; &nbsp;成都禾木美家定制家具有限公司
                是一家专业生产整体衣柜、衣帽 间、书柜、酒柜等多种系列的家
                居制品公司，同时也是集设计、 销售、服务于一体的一家综合性
                家居服务公司。
              </p>
              <br />
              <p>
                &nbsp; &nbsp; 公司自创建以来，始终坚持“精益求精”
                的经营理念，与“以客户为中心”的服
                务宗旨。持续为客户提供满意的产品和
                信赖的服务;引进国内外先进柔性生产线，
                产品制造自动化，、信息化、精细化三
                管齐下，确保产品从设计、开料、封边、
                表面处理、包装、运输、安装到服务的
                每一个环节都做到更好，保证高品质的
                产品交付到每一个客户的手中，以“智
                能产品，智慧工厂”为目标，专注于为
                高端用户提供更优质的定制家具为使命， 领跑全屋定制家居企业。
              </p>
              <br />
              <p>
                &nbsp; &nbsp;
                禾木美家作为全屋定制行业的头部企业，一直提倡科技化，数字化，精准化管理模式，无论
                是营销流程、业务数据、生产流程还是质量管理都实现了这一目标，
                2020金蝶erp系统的落地促
                进了，禾木美家全屋定制数字化的管理模式的进一步发展，使公司管理更加游刃有余，在产品交
                期和产品品质上为我们的客户交出了一份更完美的答卷，我们会继续在企业管理和技术创新的路
                上不断探索，禾木美家，不负每一份信赖!
              </p>
              <br />
              <p>
                &nbsp;
                &nbsp;非凡创造历史，发展永不止步。禾木美家定制家居将坚守“品质与服务打造强势品牌”的经营理念，尽力为家居生活提供优质健康的产品。
              </p>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="6">
          <my-sidebar :active="0"></my-sidebar>
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
    this.$store.commit('SET_MENU', 'about')
  },
  data() {
    return {
      aboutBg: './img/aboutBg.jpg'
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
