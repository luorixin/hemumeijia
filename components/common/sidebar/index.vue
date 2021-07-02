<template>
  <div>
    <div class="left_nav" id="categories">
      <h2 class="left_h">{{ currentTitle }}</h2>
      <ul class="left_nav_ul" id="firstpane">
        <li
          v-for="(item, index) in lefts"
          :key="'left_' + index"
          :class="{ active: active === index }"
        >
          <nuxt-link class="biglink" :to="item.href"
            ><i class="el-icon-arrow-right"></i>{{ item.label }}</nuxt-link
          >
          <ul class="left_snav_ul menu_body"></ul>
        </li>
      </ul>
    </div>
    <div class="left_nav" id="products">
      <h2 class="left_h">{{ currentProduct }}</h2>
      <ul class="left_nav_ul">
        <li
          v-for="(item, index) in products"
          :key="'left_' + index"
          :class="{ active: product === index }"
        >
          <nuxt-link class="biglink" :to="item.href"
            ><i class="el-icon-arrow-right"></i>{{ item.label }}</nuxt-link
          >
          <ul class="left_snav_ul menu_body"></ul>
        </li>
      </ul>
    </div>
    <div class="index_contact">
      <h2 class="left_h">联系我们</h2>
      <p>联系人：王先生</p>
      <p>手机：18328550119</p>
      <p>电话：028-84456078</p>
      <p>邮箱：851836418@qq.com</p>
      <p>
        地址：成都市金牛区湾仔路88号红泰.禾木美家高端全屋定制；成都市新都区蓉都大道北三段禾木美家全屋定制
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Number,
      default: 0
    },
    product: {
      type: Number,
      default: -1
    }
  },
  data() {
    return {
      lefts: [
        {
          href: '/about',
          label: '关于我们'
        },
        {
          href: '/culture',
          label: '企业文化'
        },
        {
          href: '/feature',
          label: '产品优势'
        },
        {
          href: '/business',
          label: '招商加盟'
        },
        {
          href: '/concat',
          label: '联系我们'
        },
        {
          href: '/product/livingRoom',
          label: '产品中心'
        }
      ],
      products: [
        {
          href: '/product/livingRoom',
          label: '客厅'
        },
        {
          href: '/product/kitchen',
          label: '厨房'
        },
        {
          href: '/product/bedroom',
          label: '卧室'
        },
        {
          href: '/product/study',
          label: '榻榻米'
        }
      ]
    }
  },
  computed: {
    currentTitle() {
      return this.lefts[this.active].label
    },
    currentProduct() {
      return this.product < 0 ? '产品中心' : this.products[this.product].label
    }
  }
}
</script>

<style scoped>
.left_nav {
  clear: both;
  padding-top: 0.106667rem /* 10/93.75 */;
  margin-bottom: 0.166667rem /* 20/120 */;
}

.left_h {
  position: relative;
  font-size: 0.234667rem /* 22/93.75 */;
  display: block;
  margin-top: 0.266667rem /* 25/93.75 */;
  padding-bottom: 0.106667rem /* 10/93.75 */;
  color: #2c2b2b;
}

.left_h::before {
  content: '';
  display: block;
  position: absolute;
  bottom: 0.106667rem /* 10/93.75 */;
  width: 1.066667rem /* 100/93.75 */;
  height: 0.021333rem /* 2/93.75 */;
  background-color: #666;
}

.left_h::after {
  content: '';
  display: block;
  width: 100%;
  height: 0.021333rem /* 2/93.75 */;
  background-color: #dfdfdf;
  margin-top: 0.053333rem /* 5/93.75 */;
}

.left_nav_ul {
  list-style: none;
  margin: 0px;
  padding: 0px;
  margin-top: 0.16rem /* 15/93.75 */;
}

.left_nav_ul > li {
  position: relative;
  border-bottom: 1px solid #f2f2f2;
  padding: 0.16rem /* 15/93.75 */ 0.192rem /* 18/93.75 */;
}

.left_nav_ul > li > a {
  text-decoration: none;
  font-size: 0.192rem /* 18/93.75 */;
  color: #656464;
  width: 100%;
  display: inline-block;
}

.left_nav_ul > li.active > a {
  font-weight: bold;
  color: #182923;
}

.index_contact {
  margin-top: 0.533333rem /* 50/93.75 */;
}

.index_contact p:first-child {
  margin-top: 0.16rem /* 15/93.75 */;
}

.index_contact p {
  font-size: 0.170667rem /* 16/93.75 */;
  line-height: 0.426667rem /* 40/93.75 */;
}
</style>
