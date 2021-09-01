<template>
  <div class="nav-header">
    <i
      class="fold"
      :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      @click="handleFlodClick()"
      style="line-height: 50px"
    ></i>

    <div class="content">
      <div>面包屑</div>
      <div class="user-info">
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-avatar
              size="small"
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            ></el-avatar>
            <span style="margin-left: 7px">{{ name }}</span>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>用户信息</el-dropdown-item>
              <el-dropdown-item>系统管理</el-dropdown-item>
              <el-dropdown-item divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  emits: ['foldChange'],
  setup(props, { emit }) {
    const store = useStore()
    const name = computed(() => store.state.login.userInfo.name)
    const isFold = ref(false)
    const handleFlodClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      handleFlodClick,
      isFold,
      name
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .fold {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
  .el-dropdown-link {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
}
</style>
