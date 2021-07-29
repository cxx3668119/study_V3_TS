export const demoMixin = {
  data() {
    return {
      message: 'hello data mixin'
    }
  },
  methods: {
    foo() {
      console.log("demo mixin foo");
    },
    created() {
      console.log("执行了mixin demo ")
    },
  }
}