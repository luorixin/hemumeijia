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
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-position="left"
        ref="ruleForm"
        label-width="100px"
      >
        <el-form-item label="用户名" prop="username" placeholder="请输入用户名">
          <el-input
            type="text"
            v-model="ruleForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" placeholder="请输入密码">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">登陆</el-button>
          <span style="margin-left: 10px">
            没有烽火台账号？<el-button type="text" @click="showRegister()"
              >去注册</el-button
            >
          </span>
        </el-form-item>
      </el-form>
    </el-dialog>

    <el-dialog
      title=""
      :visible.sync="registerVisible"
      width="40%"
      :before-close="handleClose"
      append-to-body
      center
    >
      <el-form
        :model="registerForm"
        status-icon
        :rules="registerRules"
        :hide-required-asterisk="false"
        label-position="left"
        ref="registerForm"
        label-width="100px"
      >
        <el-form-item label="邮箱" prop="email">
          <el-input
            type="text"
            placeholder="请输入邮箱"
            v-model="registerForm.email"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model="registerForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPassWord">
          <el-input
            type="password"
            v-model="registerForm.checkPassWord"
            placeholder="请输入密码"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input
            type="text"
            placeholder="请输入手机号"
            v-model="registerForm.phone"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="verifyCode">
          <el-col :span="16" :gutter="20">
            <el-input
              type="text"
              placeholder="请输入验证码"
              v-model="registerForm.verifyCode"
              autocomplete="off"
            ></el-input>
          </el-col>
          <el-col :span="2">&nbsp;</el-col>
          <el-col :span="6">
            <el-button type="primary" @click="getVerifyCode()"
              >获取验证码</el-button
            ></el-col
          >
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitRegisterForm()"
            >注册</el-button
          >
          <span style="margin-left: 10px">
            已有烽火台账号？<el-button type="text" @click="showFreeTry()"
              >去登陆</el-button
            >
          </span>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import Util from '@/services/utils/util'
import Config from '@/config'
import { get, postForm, getForm } from '@/services/http/axios'
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
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.registerForm.password !== '') {
          this.$refs.registerForm.validateField('checkPassWord')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    var validatePhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号'))
      } else if (!Util.validatePhone(value)) {
        callback(new Error('请输入正确的手机号!'))
      } else {
        callback()
      }
    }
    return {
      freeTryVisible: false,
      registerVisible: false,
      ruleForm: {
        password: '',
        username: ''
      },
      registerForm: {
        email: '',
        password: '',
        checkPassWord: '',
        phone: '',
        verifyCode: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: ['blur'] }
        ],
        password: [{ required: true, message: '请输入密码', trigger: ['blur'] }]
      },
      registerRules: {
        email: [
          {
            required: true,
            message: '请输入正确的邮箱地址',
            trigger: ['blur']
          },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: ['blur']
          }
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: ['blur'] },
          { validator: validatePhone, trigger: 'blur' }
        ],
        verifyCode: [
          { required: true, message: '请输入验证码', trigger: ['blur'] }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: ['blur']
          },
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPassWord: [
          {
            required: true,
            message: '请再次输入密码',
            trigger: ['blur']
          },
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleClose() {
      this.freeTryVisible = false
      this.registerVisible = false
    },
    showFreeTry() {
      this.freeTryVisible = true
      this.registerVisible = false
    },
    showRegister() {
      this.freeTryVisible = false
      this.registerVisible = true
    },
    async getVerifyCode() {
      if (Util.validatePhone(this.registerForm.phone)) {
        const data = await get('business/v2/auth/verifyCode', {
          phone: this.registerForm.phone
        })
        if (data && data.success) {
          this.$message.success('验证码发送成功，请查收')
        }
      } else {
        this.$message.error('请输入正确的手机号')
      }
    },
    submitForm() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          const loginEntify = { ...this.ruleForm }
          postForm('business/v2/auth/login', loginEntify).then(data => {
            if (data && data.user) {
              // 获取公司id
              get(
                `business/business/getUserBusinesses?userId=${data.user.id}`
              ).then(infos => {
                if (infos && !infos.error) {
                  // 获取登陆授权码登陆到内页
                  let info = infos[0]
                  get('business/auth/login/code', {
                    businessId: info.id,
                    userId: data.user.id
                  }).then(authCode => {
                    if (authCode && authCode.code) {
                      window.open(
                        `${location.protocol}//${Config.redirectUrl}/login?redirect=apps/wecom/&loginAuthCode=${authCode.code}`,
                        '_blank'
                      )
                      this.freeTryVisible = false
                    } else {
                      this.$message.error(
                        (authCode && authCode.error) || '获取授权码失败'
                      )
                    }
                  })
                } else {
                  this.$message.error((infos && infos.error) || '获取公司失败')
                }
              })
            } else {
              this.$message.error('登陆失败')
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    submitRegisterForm() {
      this.$refs['registerForm'].validate(valid => {
        if (valid) {
          const accountEntity = {}
          const { password, checkPassWord, email, verifyCode, phone } =
            this.registerForm
          accountEntity.email = email
          accountEntity.phone = phone
          accountEntity.password = password
          accountEntity.password_again = checkPassWord || password
          accountEntity.username = email || email.split('@')[0]
          accountEntity.business_name = email
          accountEntity.channel = 'selfservice'
          accountEntity.domain = window.location.host
          accountEntity.verify_code = verifyCode
          postForm('business/v3/auth/signup', accountEntity).then(data => {
            if (data && data.success) {
              this.$message.success('注册成功')
              this.registerVisible = false
              this.$refs['registerForm'].resetFields()
            } else {
              this.$message.error(data.reason)
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
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
