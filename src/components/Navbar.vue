<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#E6E6FA"
      text-color="#6495ED"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1"><a>云班课</a></el-menu-item>
      <el-menu-item index="2"><a>关于我们</a></el-menu-item>
      <el-menu-item index="3"><a>教学包</a></el-menu-item>
      <el-menu-item index="4"><a>库管理</a></el-menu-item>
      <el-menu-item index="5"><a>反馈</a></el-menu-item>
      <el-menu-item index="6"><a>GitHub地址</a></el-menu-item>
      <el-submenu index="7">
        <template slot="title">login/logout</template>
        <el-menu-item index="7-1">login</el-menu-item>
        <el-menu-item index="7-2">logout</el-menu-item>
      </el-submenu>

      <!-- <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4">
        <a>log in/out</a>
      </el-menu-item> -->
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
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
