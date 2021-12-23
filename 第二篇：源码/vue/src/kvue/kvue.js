class Vue {
  constructor (options) {
    this.$options = options

    this.$data = options.data
    // 1.响应式
    observe(this.$data)

    // 1.5代理
    proxy(this)
    // 2.编译模板
  }
}

function proxy(vm) {
  Object.keys(vm.$data).forEach(key => {
    Object.defineProperty(vm, key, {
      get () {
        return vm.$data[key]
      },
      set (v) {
        vm.$data[key] = v
      }
    })
  })
}