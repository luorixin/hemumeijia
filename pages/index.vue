<template>
  <section class="home-main">
    <section class="home-bg"></section>
    <section class="home-screen">
      <div class="home-screen__head">
        <div class="head-text">
          <div class="text-title">禾木美家</div>
          <div class="text-desc">私人定制品味您的生活</div>
          <div class="text-desc">匠心定制，专注中高端全屋定制家居生产!</div>
        </div>
        <div class="head-carousel">
          <el-carousel :interval="5000" arrow="always" height="4.309333rem">
            <el-carousel-item v-for="(item, index) in headImgs" :key="'head_img_' + index">
              <el-image style="height: 100%" fit="fill" :src="item.src"></el-image>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </section>
    <section class="home-product">
      <div class="container">
        <div class="product-title">
          <div class="product-head">
            <h2>产品中心</h2>
            <span></span>
            <p>PRODUCT DISPLAY</p>
          </div>
        </div>
        <div class="product-list">
          <el-row :gutter="30">
            <el-col
              v-for="(item, key) in products"
              :key="'product_' + key"
              :xs="12"
              :sm="12"
              :md="8"
              :lg="6"
              :xl="6"
            >
              <div class="product-item">
                <el-image lazy :src="item.img" :alt="item.name" fit="contain">
                  <div slot="placeholder" class="image-slot">
                    加载中
                    <span class="dot">...</span>
                  </div>
                </el-image>
                <p>{{ item.label }}</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </section>
    <section class="home-process">
      <div class="container">
        <el-row class="process-content">
          <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="process-head">
            <h2>家具轻松定制</h2>
            <p>CUSTOMIZATION PROCESS</p>
          </el-col>
          <el-col :xs="12" :sm="12" :md="4" :lg="4" :xl="4" class="process-col">
            <el-image
              fit="contain"
              src="http://www.syddzjj.com/skin/picture/58dccd9f04f1a_1.png"
              alt="咨询预约"
            ></el-image>
            <h4>咨询预约</h4>
          </el-col>
          <el-col :xs="12" :sm="12" :md="4" :lg="4" :xl="4" class="process-col">
            <el-image
              fit="contain"
              src="http://www.syddzjj.com/skin/picture/58dcce28f17d5_1.png"
              alt="上门量尺"
            ></el-image>
            <h4>上门量尺</h4>
          </el-col>
          <el-col :xs="12" :sm="12" :md="4" :lg="4" :xl="4" class="process-col">
            <el-image
              fit="contain"
              src="http://www.syddzjj.com/skin/picture/58dcce4f97f0f_1.png"
              alt="工程报价"
            ></el-image>
            <h4>工程报价</h4>
          </el-col>
          <el-col :xs="12" :sm="12" :md="4" :lg="4" :xl="4" class="process-col">
            <el-image
              fit="contain"
              src="http://www.syddzjj.com/skin/picture/58dcce794024d_1.png"
              alt="批量生产"
            ></el-image>
            <h4>批量生产</h4>
          </el-col>
        </el-row>
      </div>
    </section>
    <section class="home-about">
      <div class="container">
        <div class="about-title">
          <div class="about-head">
            <h2>公司简介</h2>
            <span></span>
            <p>COMPANY PROFILE</p>
          </div>
        </div>
        <el-row :gutter="30">
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" style="text-align: center">
            <div class="about-img">
              <el-image src="http://www.syddzjj.com/skin/picture/about_1.png" fit="contain"></el-image>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <div class="about-content">
              <p class="about-contents">
                成都圣雅帝定制家居成立于
                2010年，是一家集专业研发、生产、销售、安装、售后服务为一体的大型整体家具企业。公司拥有先进的全自动化的生产设备，和一流的技术工人。专注制造，倾心管理，圣雅帝以诚信与共赢的合作宗旨，把诚信、负责、创新、团队的服务精神传递到每一款产品中。产品涵盖整体卧房家具、整体书房家具、整体客厅家具、整体儿童房家具等四大系列,
                以及衣帽间、整体衣柜、书柜、酒柜、电视柜、装饰柜、餐厅柜、床、床头柜、鞋柜、斗柜、移门等12个小类近百种产品，选材环保，款式新颖多样，满足全方位的居家生活。
                2011年公司引入ISO9001质量管理体系，以世界品质为标准，将追求质量领先、服务最优、不断创新的宗旨融化于产品开发、产品生产和...
              </p>
            </div>
            <el-button type="plain">查看详细</el-button>
          </el-col>
        </el-row>
      </div>
    </section>
    <section class="home-example">
      <div class="container">
        <div class="example-title">
          <div class="example-head">
            <h2>工程案例</h2>
            <span></span>
            <p>ENGINEERING CASE</p>
          </div>
        </div>
        <div class="example-list">
          <el-row :gutter="30">
            <el-col
              v-for="(item, key) in examples"
              :key="'example_' + key"
              :xs="12"
              :sm="12"
              :md="8"
              :lg="8"
              :xl="8"
            >
              <div class="example-item">
                <el-image lazy :src="item.img" :alt="item.name" fit="contain">
                  <div slot="placeholder" class="image-slot">
                    加载中
                    <span class="dot">...</span>
                  </div>
                </el-image>
                <p>{{ item.label }}</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </section>
    <section class="home-thanks"></section>
  </section>
</template>
<script>
if (process.browser) {
  // 在这里根据环境引入wow.js
  var { WOW } = require('wowjs')
}
export default {
  data() {
    return {
      headImgs: [
        {
          src: 'http://www.syddzjj.com/uploads/200407/1-20040FT14X30.jpg'
        },
        {
          src: 'http://www.syddzjj.com/uploads/200407/1-20040FT211943.jpg'
        },
        {
          src: 'http://www.syddzjj.com/uploads/200407/1-20040FT22Qb.jpg'
        },
        {
          src: 'http://www.syddzjj.com/uploads/200407/1-20040FT24A36.jpg'
        }
      ],
      featureImg: {
        src: '/img/Group15@2x.png'
      },
      lineImg: {
        src: '/img/icon_04.png'
      },
      products: [
        {
          label: '衣帽间',
          img: 'http://www.syddzjj.com/uploads/allimg/191011/1-1910111504410-L.jpeg'
        },
        {
          label: '衣帽间',
          img: 'http://www.syddzjj.com/uploads/allimg/191011/1-1910111504410-L.jpeg'
        },
        {
          label: '衣帽间',
          img: 'http://www.syddzjj.com/uploads/allimg/191011/1-1910111504410-L.jpeg'
        },
        {
          label: '衣帽间',
          img: 'http://www.syddzjj.com/uploads/allimg/191011/1-1910111504410-L.jpeg'
        },
        {
          label: '衣帽间',
          img: 'http://www.syddzjj.com/uploads/allimg/191011/1-1910111504410-L.jpeg'
        },
        {
          label: '衣帽间',
          img: 'http://www.syddzjj.com/uploads/allimg/191011/1-1910111504410-L.jpeg'
        },
        {
          label: '衣帽间',
          img: 'http://www.syddzjj.com/uploads/allimg/191011/1-1910111504410-L.jpeg'
        },
        {
          label: '衣帽间',
          img: 'http://www.syddzjj.com/uploads/allimg/191011/1-1910111504410-L.jpeg'
        }
      ],
      examples: [
        {
          label: '地中海风格',
          img: 'http://www.syddzjj.com/uploads/allimg/191012/1-1910121109450-L.jpg'
        },
        {
          label: '地中海风格',
          img: 'http://www.syddzjj.com/uploads/allimg/191012/1-1910121109450-L.jpg'
        },
        {
          label: '地中海风格',
          img: 'http://www.syddzjj.com/uploads/allimg/191012/1-1910121109450-L.jpg'
        },
        {
          label: '地中海风格',
          img: 'http://www.syddzjj.com/uploads/allimg/191012/1-1910121109450-L.jpg'
        },
        {
          label: '地中海风格',
          img: 'http://www.syddzjj.com/uploads/allimg/191012/1-1910121109450-L.jpg'
        },
        {
          label: '地中海风格',
          img: 'http://www.syddzjj.com/uploads/allimg/191012/1-1910121109450-L.jpg'
        }
      ]
    }
  },
  mounted() {
    if (process.browser) {
      // 在页面mounted生命周期里面 根据环境实例化WOW
      new WOW({
        live: false,
        offset: 0
      }).init()
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
    background: linear-gradient(
      70deg,
      rgba(245, 244, 254, 0.9),
      #f9fcff 44%,
      #eef5ff
    );
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
          color: #333;
          letter-spacing: 0;
          height: 0.896rem /* 84/93.75 */;
          line-height: 0.896rem /* 84/93.75 */;
          margin-bottom: 0.096rem /* 9/93.75 */;
        }
        .text-desc {
          font-family: PingFangSC-Regular;
          font-size: 0.192rem /* 18/93.75 */;
          color: #333;
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
        top: 1rem;
        right: 1.109333rem /* 104/93.75 */;
        width: 7.658667rem /* 718/93.75 */;
        height: 4.309333rem /* 404/93.75 */;
      }
    }
  }
  .home-product {
    position: relative;
    padding-bottom: 0.32rem /* 30/93.75 */;
    .product-title {
      margin: 0.48rem /* 45/93.75 */ 0px 0px 0px;
      width: 100%;
      .product-head {
        position: relative;
        margin-bottom: 0.32rem /* 30/93.75 */;
        h2 {
          font-size: 0.256rem /* 24/93.75 */;
          text-align: center;
          color: #434343;
          margin: 0;
        }
        span {
          display: block;
          width: 1.386667rem /* 130/93.75 */;
          margin: 0 auto;
          border-bottom: 0.021333rem /* 2/93.75 */ solid #56240e;
          margin-top: 0.106667rem /* 10/93.75 */;
          position: relative;
          top: 1px;
          z-index: 100;
        }
        p {
          text-align: center;
          padding-top: 8px;
          font-size: 18px;
          color: #b1afaf;
          border-top: 1px solid #d9d9d9;
        }
      }
    }
    .product-list {
      position: relative;
      .product-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 250px;
        p {
          font-size: 0.170667rem /* 16/93.75 */;
          margin-bottom: 0.106667rem; /* 10/93.75 */
        }
      }
    }
  }
  .home-process {
    padding: 0.213333rem /* 20/93.75 */ 0.32rem /* 30/93.75 */;
    margin: 0 auto;
    background: linear-gradient(
      70deg,
      rgba(245, 244, 254, 0.9),
      #f9fcff 44%,
      #eef5ff
    );
    .process-content {
      width: 100%;
      display: flex;
      align-items: center;
      .process-head {
        h2 {
          font-size: 0.234667rem /* 22/93.75 */;
          margin-bottom: 0.106667rem /* 10/93.75 */;
        }
        p {
          font-size: 0.170667rem /* 16/93.75 */;
        }
      }
      .process-col {
        text-align: center;
        h4 {
          margin-top: 0.106667rem; /* 10/93.75 */
        }
        /deep/ img {
          display: block;
          margin: 0 auto;
          max-width: 110px;
          transition: transform 0.5s ease-out;
          &:hover {
            transform: rotateZ(360deg);
          }
        }
      }
    }
  }
  .home-about {
    position: relative;
    padding-bottom: 0.32rem /* 30/93.75 */;
    .about-title {
      margin: 0.48rem /* 45/93.75 */ 0px 0px 0px;
      width: 100%;
      .about-head {
        position: relative;
        margin-bottom: 0.32rem /* 30/93.75 */;
        h2 {
          font-size: 0.256rem /* 24/93.75 */;
          text-align: center;
          color: #434343;
          margin: 0;
        }
        span {
          display: block;
          width: 1.386667rem /* 130/93.75 */;
          margin: 0 auto;
          border-bottom: 0.021333rem /* 2/93.75 */ solid #56240e;
          margin-top: 0.106667rem /* 10/93.75 */;
          position: relative;
          top: 1px;
          z-index: 100;
        }
        p {
          text-align: center;
          padding-top: 8px;
          font-size: 18px;
          color: #b1afaf;
          border-top: 1px solid #d9d9d9;
        }
      }
    }
    .about-content {
      line-height: 0.362667rem /* 34/93.75 */;
      color: #777;
      width: 100%;
      margin-bottom: 0.213333rem /* 20/93.75 */;
      .about-contents {
        font-size: 0.192rem /* 18/93.75 */;
      }
    }
  }
  .home-example {
    position: relative;
    padding-bottom: 0.32rem /* 30/93.75 */;
    .example-title {
      margin: 0.48rem /* 45/93.75 */ 0px 0px 0px;
      width: 100%;
      .example-head {
        position: relative;
        margin-bottom: 0.32rem /* 30/93.75 */;
        h2 {
          font-size: 0.256rem /* 24/93.75 */;
          text-align: center;
          color: #434343;
          margin: 0;
        }
        span {
          display: block;
          width: 1.386667rem /* 130/93.75 */;
          margin: 0 auto;
          border-bottom: 0.021333rem /* 2/93.75 */ solid #56240e;
          margin-top: 0.106667rem /* 10/93.75 */;
          position: relative;
          top: 1px;
          z-index: 100;
        }
        p {
          text-align: center;
          padding-top: 8px;
          font-size: 18px;
          color: #b1afaf;
          border-top: 1px solid #d9d9d9;
        }
      }
    }
    .example-list {
      position: relative;
      .example-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 250px;
        p {
          font-size: 0.170667rem /* 16/93.75 */;
          margin-bottom: 0.106667rem; /* 10/93.75 */
        }
      }
    }
  }
  .container {
    margin: auto;
  }
  @media (min-width: 769px) {
    .container {
      width: 750px;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
}
</style>
