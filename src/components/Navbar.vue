<template>
  <div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#E6E6FA"
      text-color="#6495ED"
      active-text-color="#ffd04b"
    >
      <el-menu-item @click="goYun () " index="1">云班课</el-menu-item>
      <el-menu-item @click="goYun ()" index="2">关于我们</el-menu-item>
      <el-menu-item index="3">
        <a>教学包</a>
      </el-menu-item>
      <el-menu-item index="4">
        <a>库管理</a>
      </el-menu-item>
      <el-menu-item index="5">
        <a>反馈</a>
      </el-menu-item>
      <el-menu-item index="6"><a href="https://github.com/Tiramisu-llh/course-project">
        GitHub地址</a>
      </el-menu-item>
      <el-submenu index="7">
        <template slot="title">Login/Logout</template>
        <el-menu-item @click="goLogin () " index="7-1">Login</el-menu-item>
        <el-menu-item @click="goYun ()" index="7-2">Logout</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    goYun () {
      this.$router.push({ path: '/#' })
    },
    goLogin () {
      this.$router.push({ path: '/login' })
    }
    // goGithub(){
    //   this.$window.href()
    // }
  }
}
</script>
