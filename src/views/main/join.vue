<template>
  <div class="container">
    <!-- 导航栏 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="mb-3" style="margin-top: 30px;">
      <el-breadcrumb-item :to="{ path: '/index' }">课程</el-breadcrumb-item>
      <el-breadcrumb-item>加入班课</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 内容 -->
    <el-row class="col-md-4 shadow rounded pt-5 pb-5" style="margin: 30px 0px 0px 380px;">
      <el-input placeholder="请输入班课号" prefix-icon="el-icon-search"></el-input>
      <div class="text-center pt-3 pb-3" style="margin-top: 20px;">
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'JoinCourse',
  data: () => ({}),
  computed: {},
  methods: {},
  confirm () {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
</style>
