<template>
  <section class="home-main">
    <section class="home-bg"></section>
    <section class="home-screen">
      <div class="home-screen__head">
        <div class="head-text">
          <div class="text-title">Parllay企微管家</div>
          <div class="text-desc">基于企业微信构建营销自动化和用户增长体系</div>
          <div class="text-opt">
            <freetry type="primary">立即免费使用</freetry>
          </div>
        </div>
        <div class="head-carousel">
          <el-carousel :interval="5000" arrow="always" height="4.309333rem">
            <el-carousel-item
              v-for="(item, index) in headImgs"
              :key="'head_img_' + index"
            >
              <el-image :src="item.src"></el-image>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </section>
    <section class="home-feature">
      <div class="feature-title">
        Parllay企微管家 助您打通微信用户数据，构建营销自动化与和用户增长体系
      </div>
      <div class="feature-bg">
        <el-image class="feature-img" :src="featureImg.src"></el-image>
      </div>
    </section>
    <section class="home-detail">
      <div class="detail-tabs">
        <span
          @mouseover="chaneTab(0)"
          class="tab"
          :class="{ active: activeTab === 0 }"
          >高效获客</span
        >
        <span class="tabs-divider"></span>
        <span
          @mouseover="chaneTab(1)"
          class="tab"
          :class="{ active: activeTab === 1 }"
          >销售转化</span
        >
        <span class="tabs-divider"></span>
        <span
          @mouseover="chaneTab(2)"
          class="tab"
          :class="{ active: activeTab === 2 }"
          >社群运营</span
        >
        <span class="tabs-divider"></span>
        <span
          @mouseover="chaneTab(3)"
          class="tab"
          :class="{ active: activeTab === 3 }"
          >企业风控</span
        >
      </div>
      <div
        class="detail-con wow animate__animated animate__fadeIn"
        v-for="(detail, index) in detailCon"
        :key="'detail_' + index"
        v-show="index === activeTab"
      >
        <div class="detail-title">{{ detail.title }}</div>
        <div class="detail-split">
          <img :src="lineImg.src" alt />
        </div>
        <div class="detail-content">
          <div class="content-inner">
            <div
              class="inner-ul"
              v-for="(item, key) in detail['detail']"
              :key="'deatil_' + key"
            >
              <div class="inner-ul__title">{{ item.title }}</div>
              <div class="inner-ul__desc">{{ item.desc }}</div>
            </div>
          </div>
          <div class="content-img">
            <img :src="detail.img" alt />
            <div class="content-imgbg"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="home-thanks"></section>
  </section>
</template>
<script>
import freetry from '../components/common/header/freetry.vue'
export default {
  components: { freetry },
  data() {
    return {
      headImgs: [
        {
          src: 'https://assets.weibanzhushou.com/web/we-work-webapp/website-landing-page_right-1-4.ad681e3fc1f0.png'
        },
        {
          src: 'https://assets.weibanzhushou.com/web/we-work-webapp/website-landing-page_right-1-3.648979a32b8d.png'
        },
        {
          src: 'https://assets.weibanzhushou.com/web/we-work-webapp/website-landing-page_right-1-4.ad681e3fc1f0.png'
        },
        {
          src: 'https://assets.weibanzhushou.com/web/we-work-webapp/website-landing-page_right-1-1.150bc5376cbb.png'
        }
      ],
      featureImg: {
        src: '/img/Group15@2x.png'
      },
      lineImg: {
        src: '/img/icon_04.png'
      },
      activeTab: 0,
      detailCon: [
        {
          title: '高效获客',
          img: '/img/高效获客@2x.png',
          detail: [
            {
              title: '批量加好友',
              desc: '为员工创建批量添加好友任务，备注、标签自动同步，实时反馈添加详情，可支持一次上传多个客户分配给多个员工'
            },
            {
              title: '智能码',
              desc: '广告投放、线下活动、内容营销…不同渠道匹配不同智能码，以此追踪获客轨迹，改善营销效果，并分配指派不同员工，自动发送欢迎语、打标签'
            },
            {
              title: '一客一码',
              desc: '为每个客户生成专属二维码名片，清晰反馈老客户带新客户情况，企业可追溯客源'
            }
          ]
        },
        {
          title: '销售转化',
          img: '/img/销售转化@2x.png',
          detail: [
            {
              title: '客户动态',
              desc: '客户的行为路径实时同步，帮助分析客户意向，关键行为提醒，帮助销售转化促单'
            },
            {
              title: '素材分享',
              desc: '企业配置素材库，销售添加智能码，记录客户分享链路，生成客户关系网，分析客户决策者，帮助销售了解客户关系'
            },
            {
              title: '历史朋友圈',
              desc: '可为员工添加历史朋友圈，销售也可自己添加朋友圈，丰富销售个人对外展示资料，供客户全方位了解企业及员工详情'
            }
          ]
        },
        {
          title: '社群运营',
          img: '/img/社群运营@2x.png',
          detail: [
            {
              title: '群SOP',
              desc: '制定推送规则，系统自动提醒群主执行规则发送消息，有效触达客户，制定客户关怀流程'
            },
            {
              title: '自动拉群',
              desc: '创建社群智能码，先将客户添加到员工账号中，再通过欢迎语邀请客户加入群聊，对进群的客户自动打标签'
            },
            {
              title: '标签建群',
              desc: '根据客户标签建群，企业可以有针对性地给不同特征的客户群制定不同的的社群运营方案，社群运营起来也会更高效，更利于群转化'
            }
          ]
        },
        {
          title: '企业风控',
          img: '/img/企业风控@2x.png',
          detail: [
            {
              title: '聊天违规提醒',
              desc: '合规化存档企业微信聊天内容，便于会话质检和内部管理运营，避免客服、运营人员会话不规范'
            },
            {
              title: '客户流失提醒',
              desc: '客户流失提醒、员工删除客户预警，企业内部可控管理，方便采取挽回沟通措施'
            },
            {
              title: '离职继承',
              desc: '企业可将离职员工客户分配给其他员工，减少企业客户资源流失，也减少服务中断对客户服务体验的影响'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleClose() {
      console.log('close')
    },
    chaneTab(tab) {
      this.activeTab = tab
    }
  }
}
</script>
<style scoped lang="scss">
.home-main {
  position: relative;
  .home-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6.186667rem /* 580/93.75 */;
    background: lightblue;
  }
  .home-screen {
    position: relative;
    .home-screen__head {
      position: relative;
      height: 6.186667rem /* 580/93.75 */;
      .head-text {
        position: absolute;
        left: 2.112rem /* 198/93.75 */;
        top: 2.058667rem /* 193/93.75 */;
        z-index: 100;
        .text-title {
          font-family: PingFangSC-Semibold;
          font-size: 0.64rem /* 60/93.75 */;
          color: #ffffff;
          letter-spacing: 0;
          height: 0.896rem /* 84/93.75 */;
          line-height: 0.896rem /* 84/93.75 */;
        }
        .text-desc {
          margin-top: 0.096rem /* 9/93.75 */;
          font-family: PingFangSC-Regular;
          font-size: 0.192rem /* 18/93.75 */;
          color: #ffffff;
          letter-spacing: 0;
          line-height: 0.309333rem /* 29/93.75 */;
        }
        .text-opt {
          margin-top: 0.650667rem /* 61/93.75 */;
          font-size: 0.149333rem /* 14/93.75 */;
        }
      }
      .head-carousel {
        position: absolute;
        top: 1.066667rem /* 100/93.75 */;
        right: 1.109333rem /* 104/93.75 */;
        width: 7.658667rem /* 718/93.75 */;
        height: 4.309333rem /* 404/93.75 */;
      }
    }
  }
  .home-feature {
    position: relative;
    background: #fff;
    height: 7.04rem /* 660/93.75 */;
    .feature-title {
      margin: 0.96rem auto /* 90/93.75 */;
      width: 100%;
      font-family: PingFangSC-Semibold;
      font-size: 0.256rem /* 24/93.75 */;
      color: #626262;
      letter-spacing: 0.014613rem /* 1.37/93.75 */;
      text-align: center;
    }
    .feature-bg {
      width: 100%;
      height: 3.914667rem /* 367/93.75 */;
      .feature-img {
        width: 12.405333rem /* 1163/93.75 */;
        height: 100%;
        margin: auto;
        display: block;
      }
    }
  }
  .home-detail {
    position: relative;
    height: 7.189333rem /* 674/93.75 */;
    .detail-tabs {
      background: #fff;
      height: 1.536rem /* 144/93.75 */;
      padding: 0.544rem /* 51/93.75 */;
      display: flex;
      justify-content: center;
      align-items: center;
      span.tab {
        font-family: PingFangSC-Regular;
        font-size: 0.32rem /* 30/93.75 */;
        color: #2b2b2b;
        height: 0.448rem /* 42/93.75 */;
        line-height: 0.448rem /* 42/93.75 */;
        letter-spacing: -0.64px;
        margin: 0 0.661333rem /* 62/93.75 */;
        cursor: pointer;
        &.active {
          color: #e66041;
        }
      }
      .tabs-divider {
        width: 0.032rem /* 3/93.75 */;
        height: 0.352rem /* 33/93.75 */;
        background: #979797;
      }
    }
    .detail-con {
      background: #f5f5f5;
      height: 5.653333rem; /* 530/93.75 */
      overflow: hidden;
      transition: all 0.5s;
      .detail-title {
        font-family: PingFangSC-Regular;
        font-size: 0.341333rem /* 32/93.75 */;
        color: #2b2b2b;
        letter-spacing: -0.69px;
        margin-top: 0.746667rem /* 70/93.75 */;
        margin-left: 1.834667rem /* 172/93.75 */;
      }
      .detail-split {
        width: 0.32rem /* 30/93.75 */;
        height: 0.064rem /* 6/93.75 */;
        margin-top: 0.16rem /* 15/93.75 */;
        margin-left: 1.834667rem /* 172/93.75 */;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .detail-content {
        margin-top: 0.501333rem /* 47/93.75 */;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 1.834667rem /* 172/93.75 */;
        padding-right: 1.632rem /* 153/93.75 */;
        position: relative;
        .content-inner {
          display: flex;
          flex-direction: column;
          width: 7.434667rem /* 697/93.75 */;
          .inner-ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0.213333rem /* 20/93.75 */ 0;
            .inner-ul__title {
              width: 1.109333rem /* 104/93.75 */;
              height: 0.32rem /* 30/93.75 */;
              line-height: 0.32rem;
              background: #e66041;
              text-align: center;
              font-family: PingFangSC-Regular;
              font-size: 0.149333rem /* 14/93.75 */;
              color: #fffcfc;
              letter-spacing: -0.3px;
            }
            .inner-ul__desc {
              font-family: PingFangSC-Regular;
              font-size: 0.170667rem /* 16/93.75 */;
              width: 5.898667rem /* 553/93.75 */;
              color: #2b2b2b;
              letter-spacing: -0.34px;
              line-height: 0.288rem /* 27/93.75 */;
            }
          }
        }
        .content-img {
          width: 3.541333rem /* 332/93.75 */;
          height: 2.133333rem /* 200/93.75 */;
          position: relative;
          z-index: 55;
          & > img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
