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
  animation: bounce 1s ease;
}
.cxx-leave-active {
  animation: bounce 1s ease reverse;
}
@keyframes bounce {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>