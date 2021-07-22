<template>
  <div>
    <tab-control :titles="titles"></tab-control>
  </div>
</template>

<script>
import TabControl from "./TabControl.vue";

export default {
  components: {
    TabControl,
  },
  data() {
    return {
      titles: ["衣服", "鞋子", "裤子"],
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
</style>