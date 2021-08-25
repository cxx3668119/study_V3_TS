<template>
  <div class="login-panel">
    <h2 class="title">昕昕管理系统</h2>
    <div class="container">
      <el-tabs type="border-card" stretch v-model="currentTab">
        <el-tab-pane name="account">
          <template #label>
            <span><i class="el-icon-user-solid"></i> 账号登录</span>
          </template>
          <login-account ref="accountRef"></login-account>
        </el-tab-pane>
        <el-tab-pane name="phone">
          <template #label>
            <span><i class="el-icon-phone-outline"></i> 手机登录</span>
          </template>
          <login-phone></login-phone>
        </el-tab-pane>
      </el-tabs>

      <div class="account-control">
        <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
        <el-link type="primary">忘记密码</el-link>
      </div>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  name: 'LoginPanel',
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    // 定义属性
    const isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const currentTab = ref<string>('account')

    // 定义方法
    const handleLoginClick = () => {
      if (currentTab.value === 'account') {
        console.log(123)
        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        console.log(currentTab.value)
      }
    }
    return { isKeepPassword, handleLoginClick, accountRef, currentTab }
  }
})
</script>

<style lang="less" scoped>
.login-panel {
  width: 320px;
  margin-bottom: 150px;
  .title {
    text-align: center;
    margin-bottom: 20px;
  }
}
.account-control {
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
}

.login-btn {
  width: 100%;
  margin-top: 10px;
}
</style>
