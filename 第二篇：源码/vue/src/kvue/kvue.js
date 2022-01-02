class Vue {
  constructor (options) {
    this.$options = options

    this.$data = options.data
    // 1.响应式
    observe(this.$data)
    // 1.5代理
    proxy(this)

    // 2.编译模板
    // new Compile(options.el, this)

    // 挂载$mount
    if (options.el) {
      this.$mount(options.el)
    }
  }

  $mount (el) {
    // 1.获取宿主
    this.$el = document.querySelector(el)

    // 2 执行render
    const updateComponent = () => {
      const vnode = this.$options.render.call(this, this.$createElement)
      this._update(vnode)
      // const parent = this.$el.parentElement

      // parent.insertBefore(vnode, this.$el.nextSibling)
      // parent.removeChild(this.$el)
      // this.$el = vnode
    }

    new Watcher(this, updateComponent)
  }

  $createElement(tag, props, children) {
    return { tag, props, children }
  }

  _update (vnode) {
    const prevVnode = this._vnode
    if (!prevVnode) {
      this.__patch__(this.$el, vnode)
    } else {
      this.__patch__(prevVnode, vnode)

    }

    this._vnode = vnode
  }

  __patch__ (oldVnode, vnode) {
    if (oldVnode.nodeType) {
      const parent = oldVnode.parentElement
      const ref = oldVnode.nextSibling
      const dom = this.$createElm(vnode)
      parent.insertBefore(dom, ref)
      parent.removeChild(oldVnode)
    } else {
      // diff
    }
  }

  $createElm (vnode) {
    const dom = document.createElement(vnode.tag)

    if (vnode.children) {
      if (typeof vnode.children === 'number') {
        dom.textContent = vnode.children
      }
    }

    vnode.elm = dom
    return dom
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
          // 判断事件
          if (this.isEvent(attrName)) {
            const dir = attrName.substring(1)
            this.eventHandler(node, exp, dir)
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
  // 统一处理动态绑定
  update (node, exp, dir) {
    // 1.初始化
    const fn = this[dir + 'Updater']
    fn && fn(node, this.$vm[exp])
    // 2.创建watcher
    new Watcher(this.$vm, exp, function (val) {
      fn && fn(node, val)
    })
  }
  // 解析{{}} & 指令
  compileText (node) {
    this.update(node, RegExp.$1, 'text')
  }
  text(node, exp) {
    this.update(node, exp, 'text')
  }
  textUpdater (node, val ) {
    node.textContent = val
  }
  model (node, exp) {
    this.update(node, exp, 'model')
    node.addEventListener('input', e => {
      this.$vm[exp] = e.target.value
    })
  }
  modelUpdater (node, val) {
    node.value = val
  }
  html (node, exp) {
    this.update(node, exp, 'html')
  }
  htmlUpdater (node, val) {
    node.innerHTML = val
  }
  
  eventHandler (node, exp, dir) {
    node.addEventListener(dir, this.$vm.$options.methods[exp].bind(this.$vm))
  }  
  isEvent (name) {return name.startsWith('@')}
  isDir(name) {return name.startsWith('v-')}
  isElement(node) {
    return node.nodeType === 1
  }

  isInter(node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
  }
}

class Watcher {
  constructor (vm, updater) {
    this.vm = vm
    this.updater = updater
    this.get()
    
  }
  get () {
    Dep.target = this

    this.updater.call(this.vm)

    Dep.target = null
  }
  update () {
    this.get()
  }
}

// dep 和响应式key有对应关系
class Dep {
  constructor () {
    this.deps = new Set()
  }
  addDep (dep) {
    this.deps.add(dep)
  }
  notify () {
    this.deps.forEach(d => {
      d.update()
    })
  }
}