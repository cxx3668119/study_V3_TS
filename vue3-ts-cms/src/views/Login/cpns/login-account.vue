<template>
  <div>
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name"
        ><el-input v-model="account.name"
      /></el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import rules from '../config/accout-config'
import { ElForm } from 'element-plus'
import localCache from '@/utils/cache'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeep: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // console.log('执行登录逻辑')
          if (isKeep) {
            // 本地缓存
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }

          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }

    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style lang="less" scoped></style>
