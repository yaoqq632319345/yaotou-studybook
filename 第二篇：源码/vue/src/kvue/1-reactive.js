function defineReactive(obj, key, val) {
  observe(val)
  Object.defineProperty(obj, key, {
    get () {
      console.log('get', key);
      return val
    },
    set (nval) {
      if (nval !== val) {
        console.log('set', key);
        val = nval
      }
    }
  })
}

function observe(obj) {
  if (typeof obj !== 'object' || obj == null) return
  Object.keys(obj).forEach(key => defineReactive(obj, key, obj[key]))
}
const obj = {}
defineReactive(obj, 'foo', 'foo')