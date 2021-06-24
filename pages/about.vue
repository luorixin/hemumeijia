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
                &nbsp;
                &nbsp;&nbsp;禾木美家全屋定制，是红泰家居全新子品牌公司，具有20多年的家具行业经验，自创立以来就以The
                creator of the comfortable
                room(惬意空间的创造者)为己任，致力于用
                原创设计，为千千万万消费者家庭定制舒适、环 保、便捷的定制家具。
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
              <br />
              <p>&nbsp; &nbsp;取得证书：</p>
              <br />
              <div class="credit-list">
                <el-row :gutter="20">
                  <el-col
                    v-for="(item, key) in credits"
                    :key="'credit_' + key"
                    :xs="12"
                    :sm="12"
                    :md="8"
                    :lg="6"
                    :xl="6"
                  >
                    <div class="credit-item">
                      <el-image
                        lazy
                        :src="item.img"
                        :alt="item.name"
                        fit="contain"
                      >
                        <div slot="placeholder" class="image-slot">
                          加载中
                          <span class="dot">...</span>
                        </div>
                      </el-image>
                      <p></p>
                    </div>
                  </el-col>
                </el-row>
              </div>
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
      aboutBg: '/img/aboutBg.jpg',
      credits: [
        {
          label: '证书',
          img: '/img/credit3.jpg'
        },
        {
          label: '证书',
          img: '/img/credit2.jpg'
        },
        {
          label: '证书',
          img: '/img/credit1.jpg'
        },
        {
          label: '证书',
          img: '/img/credit4.jpg'
        }
      ]
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
.credit-list {
  position: relative;
  .credit-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // min-height: 250px;
    p {
      font-size: 0.170667rem /* 16/93.75 */;
      margin-bottom: 0.106667rem; /* 10/93.75 */
    }
  }
}
</style>
