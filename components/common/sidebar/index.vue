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
    <div class="index_contact">
      <h2 class="left_h">联系我们</h2>
      <p>联系人：王先生</p>
      <p>手机：18781980404</p>
      <p>电话：18781980404</p>
      <p>邮箱：1042912994@qq.com</p>
      <p>地址：彭州市经济开发区独柏路566号</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Number,
      default: 0
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
        }
      ]
    }
  },
  computed: {
    currentTitle() {
      return this.lefts[this.active].label
    }
  }
}
</script>
