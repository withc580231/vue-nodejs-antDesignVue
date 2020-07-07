<!--
 * @Description: denglu
 * @Autor: HuangCheng
 * @Date: 2020-07-07 11:30:14
 * @LastEditors: HuangCheng
 * @LastEditTime: 2020-07-07 15:33:45
--> 
<template>
  <div>
    <div class="header">
      <router-link to="/update">修改信息</router-link> | 
      <a href="#" @click="logout">退出</a>
    </div>
    <h1>欢迎来到德莱联盟！</h1>
    <h2>QAQ</h2>
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      window.sessionStorage.removeItem('userInfo')
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
.header{
  position: fixed;
  right: 10px;
  top: 10px;
}
</style>
