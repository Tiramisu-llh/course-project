<template>
  <nav>
    <div>
      <router-link to="/">云班课</router-link>
      <div>
        <ul>
          <router-link to="/" tag="li">教学包</router-link>
          <router-link to="/" tag="li">库管理</router-link>
          <router-link to="#" tag="li">关于我们</router-link>
          <router-link to="/" tag="li">反馈</router-link>
          <li>
            <a href="">GitHub地址</a>
          </li>
        </ul>
        <!-- 用户信息等 -->
        <ul>
          <li>
            <router-link to="/login">登录</router-link>
            <a>退出</a>
          </li>
          <router-link to="/" tag="li">帮助</router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({}),
  computed: {
    // ...mapState({
    //   userInfo: state => state.user.userInfo
    // })
  },
  methods: {
    //     logout() {
    //       this.$store.dispatch("user/logout");
    //     }
    //   }
  }
}
</script>

<style scoped>
</style>
