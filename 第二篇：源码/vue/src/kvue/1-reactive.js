// 数组响应式
const orginProto = Array.prototype
const arraryProto = Object.create(orginProto);

['push', 'pop', 'shift', 'unshift'].forEach(m => {
  arraryProto[m] = function () {
    orginProto[m].apply(this, arguments)
    console.log('数组执行');
  }
})

function defineReactive(obj, key, val) {
  observe(val)

  const dep = new Dep()
  Object.defineProperty(obj, key, {
    get () {
      // console.log('get', key);

      if (Dep.target) dep.addDep(Dep.target)
      return val
    },
    set (nval) {
      if (nval !== val) {
        // console.log('set', key);
        observe(nval)
        val = nval
        dep.notify()
      }
    }
  })
}

function observe(obj) {
  if (typeof obj !== 'object' || obj == null) return
  if (Array.isArray(obj)) {
    obj.__proto__ = arraryProto
    for (let i = 0; i < obj.length; i++) {
      observe(obj[i])
      
    }
  } else {
    Object.keys(obj).forEach(key => defineReactive(obj, key, obj[key]))
  }
  
}