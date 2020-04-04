<template>
  <div>
    <el-row style="margin-top: 20px; margin-left:150px;">
      <el-col :md="5" :sm="10">
        <img src="@/assets/computing-on-a-chart.png" width="180" />
      </el-col>
      <el-col :span="17" class="col">
        <h2 style="text-align: center;">课程管理系统</h2>
        <h6 style="text-indent: 3em">Course Management System</h6>
        <p style="text-indent: 2em">
          课程管理系统就是为课程建立网站，老师可以在其上发布课程大纲、教学计划,
          以及每堂课的教学内容，布置作业,批改作业，公布学生成绩。
          课程管理系统往往还为课程提供一些通讯工具，如讨论组、聊天室,
          支持这门课程师生之间的交流。
        </p>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-bottom:10px;margin-left:150px;">
      <el-col :span="7" class="grid-content">
        <el-card shadow="hover">
          <img src />
          <div>
            <el-popover content="任务分配：系统设计实现">
              <el-button slot="reference">
                <h3>A</h3>
              </el-button>
            </el-popover>
          </div>
          <p>
            <i class="el-icon-ice-tea pl-1 pr-1 pointer"></i>
            <i class="el-icon-chat-line-round pl-1 pr-1 pointer"></i>
          </p>
        </el-card>
      </el-col>
      <el-col :span="7" class="grid-content">
        <el-card shadow="hover">
          <img src />
          <div>
            <el-popover content="任务分配：系统BUG测试">
              <el-button slot="reference">
                <h3>B</h3>
              </el-button>
            </el-popover>
          </div>
          <p>
            <i class="el-icon-ice-tea pl-1 pr-1 pointer"></i>
            <i class="el-icon-chat-line-round pl-1 pr-1 pointer"></i>
          </p>
        </el-card>
      </el-col>
      <el-col :span="7" class="grid-content">
        <el-card shadow="hover">
          <img src />
          <div>
            <el-popover content="任务分配：系统需求分析">
              <el-button slot="reference">
                <h3>C</h3>
              </el-button>
            </el-popover>
          </div>
          <p>
            <i class="el-icon-ice-tea pl-1 pr-1 pointer"></i>
            <i class="el-icon-chat-line-round pl-1 pr-1 pointer"></i>
          </p>
        </el-card>
      </el-col>
      <el-col :span="7" class="grid-content">
        <el-card shadow="hover">
          <img src />
          <div>
            <el-popover content="任务分配：数据库设计">
              <el-button slot="reference">
                <h3>D</h3>
              </el-button>
            </el-popover>
          </div>
          <p>
            <i class="el-icon-ice-tea pl-1 pr-1 pointer"></i>
            <i class="el-icon-chat-line-round pl-1 pr-1 pointer"></i>
          </p>
        </el-card>
      </el-col>
      <el-col :span="7" class="grid-content">
        <el-card shadow="hover">
          <img src />
          <div>
            <el-popover content="其他小伙伴">
              <p>其他小伙伴</p>
              <a href="http://geekjoker.com/">他的作品</a>
              <el-button slot="reference">
                <h3>E</h3>
              </el-button>
            </el-popover>
          </div>
          <p>
            <i class="el-icon-ice-tea pl-1 pr-1 pointer"></i>
            <i class="el-icon-chat-line-round pl-1 pr-1 pointer"></i>
          </p>
        </el-card>
      </el-col>
    </el-row>
    <div style="margin-left:400px; margin-top:50px;">
      <h5>Get started with here and build an era of cloud courses</h5>
      <router-link to="/" style="margin-left:150px;">Sign Up Free</router-link>
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
  margin-bottom: 8px;
  margin-left: 10px;
  text-align: center;
  background-color: rgb(44, 143, 121);
  border-radius: 4px;
  min-height: 150px;
}
.col{
  background-color: rgb(44, 143, 121);
}
</style>
