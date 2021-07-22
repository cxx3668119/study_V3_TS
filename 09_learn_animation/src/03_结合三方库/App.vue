<template>
  <div>
    <div><button @click="isShow = !isShow">显示/隐藏</button></div>
    <transition name="cxx">
      <h2 class="title" v-if="isShow">hello world</h2>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
  methods: {},
};
</script>

<style scoped>
.title {
  display: inline-block;
}
.cxx-enter-active {
  animation: bounceInUp 1s ease-in;
}

.cxx-leave-active {
  animation: bounceInUp 1s ease-in reverse;
}
</style>