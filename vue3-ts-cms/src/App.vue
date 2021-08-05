<template>
  <div class="app">
    <h2>{{ $store.state.name }}</h2>

    <router-link to="/main">首页</router-link>

    <el-button type="primary" circle
      ><router-link to="/login">登录</router-link></el-button
    >
    <router-view></router-view>
    <el-button>默认按钮</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {}
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
