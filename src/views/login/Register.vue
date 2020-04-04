<template>
  <div>
    <!-- 标题 -->
    <el-divider class="title">注册</el-divider>
    <el-row style="margin-top:50px;">
      <el-col :md="20">
        <el-form :model="registerForm" ref="registerForm" label-width="550px" class="item">
          <el-form-item label="用户名：" prop="userName">
            <el-input placeholder="请输入用户名" v-model.trim="registerForm.userName"></el-input>
          </el-form-item>
          <el-form-item label="邮 箱：" prop="email">
            <el-input  placeholder="请输入邮箱号"></el-input>
          </el-form-item>
          <el-form-item label="密 码：" prop="password">
            <el-input type="password" v-model.trim="registerForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="验证码：" prop="securityCode">
            <el-input v-model.trim="registerForm.securityCode" placeholder="请输入验证码">
              <el-button slot="append">获取验证码</el-button>
            </el-input>
          </el-form-item>
           <el-form-item>
            <el-button style="margin-left:200px;">注册</el-button>
            <router-link to="/login" style="margin-left:20px;">已有账号，直接登录</router-link>
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
        userName: '',
        password: '',
        email: '',
        securityCode: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 30px !important;
}
</style>
