<template>
  <div class="container">
    <el-row class="pb-5">
      <el-col :md="6" :sm="10" class="text-center">
        <img src="@/assets/computing-on-a-chart.png" width="180" />
      </el-col>
      <el-col
        :md="17"
        :sm="14"
        class="pt-5"
        style="background-color: rgb(44, 143, 121); margin-top: 20px;"
      >
        <h2 class="pl-3">课程管理系统</h2>
        <h6 class="pl-3">Course Management System</h6>
        <p style="text-indent:1em;">
          课程管理系统就是为课程建立网站，老师可以在其上发布课程大纲、教学计划,
          以及每堂课的教学内容，布置作业,批改作业，公布学生成绩。
          课程管理系统往往还为课程提供一些通讯工具，如讨论组、聊天室,
          支持这门课程师生之间的交流。
        </p>
      </el-col>
    </el-row>
    <el-row :gutter="25" class="pb-5">
      <el-col :md="7" :sm="12" class="grid-content">
        <el-card shadow="hover">
          <div>
            <el-popover content="任务分配：系统设计实现">
              <el-button slot="reference" class="p-0 border-0">
                <h3>A</h3>
              </el-button>
            </el-popover>
          </div>
          <p>
            <i class="el-icon-ice-tea" style="margin-right:13px;"></i>
            <i class="el-icon-chat-round"></i>
          </p>
        </el-card>
      </el-col>
      <el-col :md="7" :sm="12" class="grid-content">
        <el-card shadow="hover">
          <div>
            <el-popover content="任务分配：系统BUG测试">
              <el-button slot="reference" class="p-0 border-0">
                <h3>B</h3>
              </el-button>
            </el-popover>
          </div>
          <p>
            <i class="el-icon-ice-tea" style="margin-right:13px;"></i>
            <i class="el-icon-chat-round"></i>
          </p>
        </el-card>
      </el-col>
      <el-col :md="7" :sm="12" class="grid-content">
        <el-card shadow="hover">
          <div>
            <el-popover content="任务分配：系统需求分析">
              <el-button slot="reference" class="p-0 border-0">
                <h3>C</h3>
              </el-button>
            </el-popover>
          </div>
          <p>
            <i class="el-icon-ice-tea" style="margin-right:13px;"></i>
            <i class="el-icon-chat-round"></i>
          </p>
        </el-card>
      </el-col>
      <el-col :md="7" :sm="12" class="grid-content">
        <el-card shadow="hover">
          <div>
            <el-popover content="任务分配：数据库设计">
              <el-button slot="reference" class="p-0 border-0">
                <h3>D</h3>
              </el-button>
            </el-popover>
          </div>
          <p>
            <i class="el-icon-ice-tea" style="margin-right:13px;"></i>
            <i class="el-icon-chat-round"></i>
          </p>
        </el-card>
      </el-col>
      <el-col :md="7" :sm="12" class="grid-content">
        <el-card shadow="hover">
          <div>
            <el-popover content="其他小伙伴">
              <el-button slot="reference" class="p-0 border-0">
                <h3>E</h3>
              </el-button>
            </el-popover>
          </div>
          <p>
            <i class="el-icon-ice-tea" style="margin-right:13px;"></i>
            <i class="el-icon-chat-round"></i>
          </p>
        </el-card>
      </el-col>
      <el-col :md="7" :sm="12" class="grid-content">
        <el-card shadow="hover">
          <div>
            <el-popover content="其他小伙伴">
              <el-button slot="reference" class="p-0 border-0">
                <h3>F</h3>
              </el-button>
            </el-popover>
          </div>
          <p>
            <i class="el-icon-ice-tea" style="margin-right:13px;"></i>
            <i class="el-icon-chat-round"></i>
          </p>
        </el-card>
      </el-col>
    </el-row>
    <div class="text-center pb-5">
      <h5>Get started with here and build an era of cloud courses</h5>
      <router-link to="/register">Sign Up Free</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data: () => ({})
}
</script>

<style scoped>
.grid-content {
  margin: 0px 20px 10px 15px;
  text-align: center;
  background-color: rgb(44, 143, 121);
  border-radius: 4px;
}
.col {
  background-color: rgb(44, 143, 121);
}
</style>
