<template>
  <div class="login-panel">
    <h2 class="title">昕昕管理系统</h2>
    <div class="container">
      <el-tabs type="border-card" stretch>
        <el-tab-pane>
          <template #label>
            <span><i class="el-icon-user-solid"></i> 账号登录</span>
          </template>
          哈哈哈
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <span><i class="el-icon-phone-outline"></i> 手机登录</span>
          </template>
          嘿嘿嘿
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginPanel',
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.login-panel {
  width: 320px;
  .title {
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>
