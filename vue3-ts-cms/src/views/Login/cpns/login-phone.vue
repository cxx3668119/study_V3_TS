<template>
  <div>
    <el-form label-width="60px" :rules="rules" :model="phoneLogin">
      <el-form-item label="手机号" prop="phone"
        ><el-input v-model="phoneLogin.phone"
      /></el-form-item>
      <el-form-item label="验证码" prop="verification">
        <div class="get-code">
          <el-input v-model="phoneLogin.verification" />
          <el-button type="primary" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import rules from '../config/accout-config'

export default defineComponent({
  setup() {
    const phoneLogin = reactive({
      phone: '',
      verification: ''
    })
    return { phoneLogin, rules }
  }
})
</script>

<style lang="less" scoped>
.get-code {
  display: flex;

  .get-btn {
    margin-left: 10px;
  }
}
</style>
