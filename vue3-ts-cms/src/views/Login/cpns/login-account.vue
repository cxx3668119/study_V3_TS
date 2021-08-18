<template>
  <div>
    <el-form label-width="60px" :rules="rules" :model="account">
      <el-form-item label="账号" prop="name"
        ><el-input v-model="account.name"
      /></el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" type="password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import rules from '../config/accout-config'
export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      password: ''
    })

    const loginAction = () => {
      console.log('account正在开始登录')
    }

    return {
      account,
      rules,
      loginAction
    }
  }
})
</script>

<style lang="less" scoped></style>
