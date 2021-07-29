<template>
  <div>
    <home message="hahahahah"></home>
  </div>
</template>

<script>
import Home from "./Home.vue";

export default {
  //参数 返回值
  components: {
    Home,
  },
  setup() {
    console.log(this);
  },
};
</script>

<style scoped>
</style>