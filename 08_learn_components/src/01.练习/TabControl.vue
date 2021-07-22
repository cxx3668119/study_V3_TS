<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item, index) in titles"
      :key="item"
      :class="{ red: currentIndex === index }"
      @click="confrim(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      defualt() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    confrim(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style  scoped>
.tab-control {
  display: flex;
}
.tab-control-item {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.red {
  color: red;
}
</style>