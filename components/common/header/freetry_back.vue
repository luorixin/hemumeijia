<template>
  <div>
    <el-button :type="type" :plain="plain" @click="showFreeTry"
      ><slot>立即免费使用</slot></el-button
    >
    <!-- dialog -->
    <el-dialog
      title=""
      :visible.sync="freeTryVisible"
      width="30%"
      :before-close="handleClose"
      append-to-body
      center
    >
      <template v-if="step === 1">
        <span class="dialog-title">请问您是否以注册企业微信</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="handleTry(true)">已注册</el-button>
          <el-button @click="handleTry(false)">未注册</el-button>
        </span>
      </template>
      <template v-if="step === 2">
        <div class="dialog-title">
          <p>请先注册企业微信</p>
          <p class="sub">
            点击【继续】后将为你打开新网页注册企业微信，请在完成注册后回到本页面进行后续操作
          </p>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button
            v-show="!isFinished"
            type="primary"
            @click="handleRegister()"
            >继续</el-button
          >
          <el-button v-show="isFinished" type="primary" @click="handleTry(true)"
            >我已完成注册</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    plain: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      freeTryVisible: false,
      step: 1,
      isFinished: false
    }
  },
  methods: {
    handleClose() {
      this.freeTryVisible = false
    },
    reset() {
      this.step = 1
      this.isFinished = false
    },
    showFreeTry() {
      this.reset()
      this.freeTryVisible = true
    },
    handleTry(isRegister) {
      if (isRegister) {
        this.step = 3
      } else {
        this.step = 2
      }
    },
    handleRegister() {
      this.isFinished = true
      window.open(
        'https://open.work.weixin.qq.com/3rdservice/wework/register?register_code=bzjdHwULRZUB56_26KlYq633ZM0v3UTgPZHYKDNWVEMIulriCqDvACvh45qvRGss',
        '_blank'
      )
    }
  }
}
</script>

<style scoped lang="scss">
.dialog-title {
  font-size: 0.170667rem /* 16/93.75 */;
  font-weight: bold;
  text-align: center;
  width: 100%;
  display: inline-block;
  p {
    font-size: 0.170667rem /* 16/93.75 */;
    font-weight: bold;
  }
  .sub {
    font-weight: normal;
    font-size: 0.128rem /* 12/93.75 */;
    margin-top: 0.213333rem /* 20/93.75 */;
    text-align: left;
  }
}
</style>
