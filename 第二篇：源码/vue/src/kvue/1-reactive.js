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
  Object.keys(obj).forEach(key => defineReactive(obj, key, obj[key]))
}