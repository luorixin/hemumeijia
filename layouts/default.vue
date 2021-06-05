<template>
  <el-container ref="layout" class="layout-default">
    <el-header
      class="myheader"
      height=".64rem"
      ref="header"
      :class="{ hideHead: $store.state.hideHead, scrollCls: isScroll }"
    >
      <my-header />
    </el-header>
    <el-main class="mymain">
      <div class="main-content" :gutter="15">
        <transition name="fade-transform" mode="out-in">
          <nuxt />
        </transition>
      </div>
    </el-main>
    <el-footer class="myfooter" height="1.92rem">
      <my-footer />
    </el-footer>
    <el-backtop target=".layout-default" :visibility-height="100"></el-backtop>
  </el-container>
</template>

<script>
import MyHeader from '@/components/common/header/index.vue'
import MyFooter from '@/components/common/footer/index.vue'

export default {
  components: {
    MyHeader,
    MyFooter
  },
  data() {
    return {
      isScroll: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      const scroll = document.querySelector('.layout-default')
      scroll.addEventListener('scroll', this.handleScroll)
    })
  },
  destroyed() {
    console.log('destroy')
    const scroll = document.querySelector('.layout-default')
    window.removeEventListener('scroll', this.handleScroll)
  },
  watch: {
    $route: {
      handler(val) {
        if (process.client) {
          this.$store.commit('SET_HIDEHEAD', false)
          if (val.name === 'detailed-id') {
            this.$store.commit('SET_HIDEHEAD', true)
          } else {
            if (document.querySelector('.layout-default')) {
              document.querySelector('.layout-default').scrollTo(0, 0)
            }
          }
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    handleScroll(e) {
      const headerHeight = this.$refs.header.$el.offsetHeight
      if (e.target.scrollTop > headerHeight) {
        this.isScroll = true
      } else {
        this.isScroll = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/animation.scss';
.layout-default {
  height: 100vh;
  width: 100%;
  overflow: scroll;
  * {
    box-sizing: border-box;
  }
}
/deep/ .el-icon-caret-top {
  font-size: 0.213333rem /* 20/93.75 */;
}
.myheader {
  background: transparent;
  position: fixed;
  top: 0;
  width: 100%;
  height: 0.64rem /* 60/93.75 */ !important;
  z-index: 300;
  transition: all 0.5s;
  &.scrollCls {
    // display: none;
    background: #fff;
    box-shadow: 0 0.021333rem 0.085333rem 0 rgba(21, 21, 21, 0.09);
  }
}
.mymain {
  padding: 0;
  margin-bottom: 0.213333rem /* 20/93.75 */;
  overflow: unset;
}
.myfooter {
  position: relative;
  width: 100%;
  height: 1.92rem /* 180/93.75 */;
  z-index: 3;
  background: #202020;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
