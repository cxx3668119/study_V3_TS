<template>
  <div>
    Home page
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  // 参数1 props
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    console.log(props.message);
  },
};
</script>

<style scoped>
</style>