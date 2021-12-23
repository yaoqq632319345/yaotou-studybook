class Vue {
  constructor (options) {
    this.$options = options

    this.$data = options.data
    // 1.响应式
    observe(this.$data)
    // 1.5代理
    proxy(this)

    // 2.编译模板
    new Compile(options.el, this)
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
// 遍历模板树
class Compile {
  constructor (el, vm) {
    el = document.querySelector(el)
    this.$vm = vm

    this.compile(el)
  }
  compile (el) {
    const childNodes = el.childNodes

    childNodes.forEach(node => {
      if (this.isElement(node)) {
        // 元素 console.log('编译元素', node.nodeName);
        const attrs = node.attributes
        Array.from(attrs).forEach(attr => {
          // 判断是否动态指令
          const attrName = attr.name
          const exp = attr.value
          if (this.isDir(attrName)) {
            const dir = attrName.substring(2)
            this[dir] && this[dir](node, exp)
          }
        })
        // 递归
        if (node.childNodes.length > 0) {
          this.compile(node)
        }
      } else if (this.isInter(node)) {
        // 表达式 console.log('编译插值', node.textContent);
        this.compileText(node)
      }
    })
  }
  isDir(name) {return name.startsWith('v-')}
  text(node, exp) {
    node.textContent = this.$vm[exp]
  }
  html (node, exp) {
    node.innerHTML = this.$vm[exp]
  }


  // 解析{{}}
  compileText (node) {
    console.log(RegExp.$1);
    node.textContent = this.$vm[RegExp.$1]
  }

  isElement(node) {
    return node.nodeType === 1
  }

  isInter(node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
  }
}