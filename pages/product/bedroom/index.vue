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
            <h2 class="left_h">卧室</h2>
            <div class="contents product-list">
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
                    <el-image
                      :preview-src-list="products.map(item => item.img)"
                      :src="item.img"
                      :alt="item.name"
                      fit="contain"
                    >
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
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="6">
          <my-sidebar :active="5" :product="2"></my-sidebar>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import MySidebar from '~/components/common/sidebar/index'
import store from '~/store/index'
export default {
  components: {
    MySidebar
  },
  beforeCreate() {
    this.$store.commit('SET_MENU', 'product/bedroom')
  },
  data() {
    return {
      aboutBg: '/img/aboutBg.jpg',
      products: [
        {
          label: '新中式卧室',
          img: '/img/woshi1.png'
        },
        {
          label: '新中式卧室',
          img: '/img/woshi2.png'
        },
        {
          label: '欧式卧室',
          img: '/img/woshi3.png'
        },
        {
          label: '欧式卧室',
          img: '/img/woshi4.png'
        },
        {
          label: '美式卧室',
          img: '/img/woshi5.png'
        },
        {
          label: '美式卧室',
          img: '/img/woshi6.png'
        },
        {
          label: '美式卧室',
          img: '/img/woshi7.png'
        },
        {
          label: '美式卧室',
          img: '/img/woshi8.png'
        },
        {
          label: '现代风格卧室',
          img: '/img/woshi9.png'
        },
        {
          label: '现代风格卧室',
          img: '/img/woshi10.png'
        },
        {
          label: '现代风格卧室',
          img: '/img/woshi11.png'
        },
        {
          label: '现代风格卧室',
          img: '/img/woshi12.png'
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
        &.product-list {
          position: relative;
          .product-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 2.133333rem /* 200/93.75 */;
            p {
              font-size: 0.170667rem /* 16/93.75 */;
              margin-bottom: 0.106667rem; /* 10/93.75 */
            }
          }
        }
      }
    }
    .left_nav {
      padding-top: 0.426667rem /* 40/93.75 */;
    }
  }
}
</style>
