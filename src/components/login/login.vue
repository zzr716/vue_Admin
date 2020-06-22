<!--  -->
<template>
<div class="login-wrap">
    <el-form class="login-form" label-position="top" label-width="80px" :model="formdata">
        <h2>用户登录</h2>
        <el-form-item label="用户名">
            <el-input v-model="formdata.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="formdata.password"></el-input>
        </el-form-item>
        <el-button 
        @click.prevent="handleLogin()"
        type="primary" class="login-btn">登录</el-button>
    </el-form>
</div>
</template>

<script>
export default {
  data() {
    return {
      formdata: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    handleLogin () {
      this.$http.post('login/schoolLogin', this.formdata).then(res => {
        console.log(res)
      })
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created() {

  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted() {

  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.login-wrap {
  height: 100%;
  background-color: #324752;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-wrap .login-form {
  width: 400px;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 30px;
}
.login-wrap .login-form .login-btn {
  width: 100%;
}
</style>
