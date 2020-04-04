<template>
  <div>
    <el-divider class="title">登录</el-divider>
    <el-row style="margin-top:50px;">
      <el-col :span="15">
        <el-form ref="form" :model="form" label-width="650px">
          <el-form-item label="用户名：">
            <el-input v-model="form.name"></el-input>
          </el-form-item>

          <el-form-item label="密码：">
            <el-input v-model="form.paw"></el-input>
          </el-form-item>
          <el-form-item style="margin-left:100px;">
            <el-button>登录</el-button>
            <el-button @click="goRegister()">注册</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
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
.title {
  margin: 3rem 0;
  font-size: 30px !important;
}
</style>
