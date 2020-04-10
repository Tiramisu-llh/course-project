<template>
  <div class="container">
    <!-- 导航栏 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="mb-3" style="margin-top: 30px;">
      <el-breadcrumb-item :to="{ path: '/index' }">课程</el-breadcrumb-item>
      <el-breadcrumb-item>创建班课</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 表单 -->
    <el-row class="col-md-7 shadow rounded pt-5 pb-5" style="margin: 30px 0px 0px 230px;">
      <el-form label-width="100px" class="pr-3">
        <h5 class="text-center mb-4">创建班级</h5>
        <el-form-item label="班级名称"  >
          <el-input placeholder="请输入班级名称"></el-input>
        </el-form-item>
        <el-form-item label="课程名称" >
          <el-input placeholder="请输入课程名称"></el-input>
        </el-form-item>
        <el-form-item label="学期区间">
          <el-select class="w-100">
            <el-option label="2019-2020" value="2019-2020"></el-option>
            <el-option label="2019-2021" value="2019-2021"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="班级说明" >
          <el-input type="textarea" placeholder="请输入班级说明"></el-input>
        </el-form-item>
        <div class="text-center">
          <el-button type="primary" style="width:150px;">创建</el-button>
          <el-button style="width:150px;">重置</el-button>
        </div>
      </el-form>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'CreateCourse',
  data () {
    return {}
  },
  computed: {},
  methods: {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
</style>
