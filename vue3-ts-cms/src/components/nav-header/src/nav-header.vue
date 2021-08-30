<template>
  <div class="nav-header">
    <i
      class="fold"
      :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      @click="handleFlodClick()"
    ></i>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFlodClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      handleFlodClick,
      isFold
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  .fold {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
