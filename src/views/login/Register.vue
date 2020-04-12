<template>
  <div class="container">
    <el-divider>注册</el-divider>
    <el-row style="margin-top: 30px;">
      <el-col :md="20">
        <el-form :model="registerForm" ref="registerForm" label-width="250px">
          <el-form-item
            label="用户名："
            prop="userName"
            :rules="[{ required: true, message: '请输入用户名', trigger: 'change' },
                      { min: 2, max: 6, message: '长度在2到6位', trigger: ['blur', 'change'] }]"
          >
            <el-input
              placeholder="请输入用户名"
              v-model.trim="registerForm.userName"
              suffix-icon="el-icon-user-solid"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="邮 箱："
            prop="email"
            :rules="[{ required: true, message: '请输入邮箱地址', trigger: 'change' },
                      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }]"
          >
            <el-input
              v-model="registerForm.email"
              placeholder="请输入邮箱号"
              suffix-icon="el-icon-message"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="密 码："
            prop="password"
            :rules="[{ required: true, message: '请输入密码', trigger: 'change' },
                      { min: 6, max: 15, message: '长度在6到15位', trigger: ['blur', 'change'] }]"
          >
            <el-input
              type="password"
              v-model.trim="registerForm.password"
              placeholder="请输入密码"
              suffix-icon="el-icon-key"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="验证码："
            prop="securityCode"
            :rules="[{ required: true, message: '请输入验证码', trigger: ['blur', 'change'] }]"
          >
            <el-input
              v-model.trim="registerForm.securityCode"
              placeholder="请输入验证码"
              suffix-icon="el-icon-s-claim"
            >
              <el-button slot="append">获取验证码</el-button>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="btn btn-secondary btn-lg btn-block" @click="register ()">马上注册</el-button>
            <router-link to="/login">已有账号，直接登录</router-link>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  userName: 'Register',
  data () {
    return {
      checked: true,
      registerForm: {
        email: '',
        password: '',
        userName: '',
        verifyCode: ''
      }
    }
  },
  methods: {
    register () {
      this.$axios
        .post('http://39.107.230.57:9100/api/v1/register', this.registerForm)
        .then(res => {
          console.log(res)
          this.$router.push('/login')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
