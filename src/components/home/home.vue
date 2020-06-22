<!--  -->
<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          logo
        </el-col>
        <el-col :span="20">
          学校管理平台
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside class="aside" width="200px">
        <el-menu :unique-opened="true" :router="true">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>系统设置</span>
            </template>
            <el-menu-item index="role">
              <i class="el-icon-location"></i>
              <span>角色列表</span>
            </el-menu-item>
            <el-menu-item index="permission">
              <i class="el-icon-location"></i>
              <span>权限列表</span>
            </el-menu-item>
            <el-menu-item index="users">
              <i class="el-icon-location"></i>
              <span>用户列表</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-location"></i>
            <span>首页</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-location"></i>
            <span>设备列表</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
data() {
return {

}
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style>
/* @import url(); 引入css类 */
.container {
  height: 100%;
}
.header {
  background-color: #b3c0d1;
}
.aside {
  background-color: #d3dcd6;
}
.main {
  background-color: #e9eef3;
  height: 100%;
}
</style>