<template>
  <div class="container">
    <el-divider>登录</el-divider>
    <el-row :gutter="20">
      <el-col :md="10" :sm="9" class="text-center">
        <i class="el-icon-cloudy" style="font-size: 350px; "></i>
      </el-col>

      <el-col :md="13" :sm="15" style="margin-top: 50px;">
        <el-form ref="form" :model="form" label-width="160px">
          <el-form-item label="用户名：">
            <el-input placeholder="请输入用户名" v-model="form.name" suffix-icon="el-icon-user-solid"></el-input>
          </el-form-item>

          <el-form-item label="密码：">
            <el-input placeholder="请输入密码" v-model="form.paw" suffix-icon="el-icon-key"></el-input>
          </el-form-item>
          <div class="form-group-btn">
            <el-button
              type="primary"
              @click="submitForm('loginForm')"
              style="width:200px; margin-left:170px;"
            >登录</el-button>
            <el-button @click="goRegister()" style="width:200px;">注册</el-button>
          </div>
        </el-form>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <div class="text-center">You can also sign up with：</div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        name: ''
      }
    }
  },
  methods: {
    goRegister () {
      this.$router.push({ path: '/register' })
    }
  },
  components: {}
}
</script>

<style scoped>
</style>
