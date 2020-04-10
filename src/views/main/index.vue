<template>
  <div class="container">
    <el-row :gutter="20" style="margin-top: 20px;">
      <el-col :md="12" :sm="9" :xs="24" class="pb-2">
        <el-menu>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-circle-plus-outline" style="font-size:30px;"></i>
            </template>
            <el-menu-item @click="goJoin()" index="1-1">加入班课</el-menu-item>
            <el-menu-item @click="goCreate()" index="1-2">创建班课</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :md="12" :sm="15" :xs="24">
        <el-input placeholder="输入课程名" suffix-icon="el-icon-search"></el-input>
      </el-col>
    </el-row>
    <el-tabs class="mb-5">
      <!-- 加入的课程 -->
      <el-tab-pane label="我创建的 ( )">
        <div class="p-5 text-center">暂无创建的班级</div>
      </el-tab-pane>
      <!-- 创建的课程 -->
      <el-tab-pane label="我加入的 ( )">
        <div class="p-5 text-center">暂无加入的班级</div>
      </el-tab-pane>
      <el-tab-pane label="班课排序">
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  components: {},
  methods: {
    goJoin () {
      this.$router.push({ path: '/join' })
    },
    goCreate () {
      this.$router.push({ path: '/create' })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
