/*
 * @lc app=leetcode.cn id=990 lang=javascript
 *
 * [990] 等式方程的可满足性
 */

// @lc code=start
/**
 * @param {string[]} equations
 * @return {boolean}
 */
 class UniSet {
  constructor (n) {
      this.arr = new Array(n)
      for (let i = 0; i < this.arr.length; i++) {
          this.arr[i] = i
      }
  }

  get (idx) {
      return this.arr[idx] = (this.arr[idx] === idx ? idx : this.get(this.arr[idx]))
  }

  concat (i, j) {
      // console.log(i, j)
      this.arr[this.get(i)] = this.get(j)
  }
}
var equationsPossible = function(equations) {
  let uniset = new UniSet(26)

  for (let i = 0; i < equations.length; i++) {
      let equ = equations[i][1]
      if (equ == '!') continue
      let a = equations[i][0].charCodeAt() - 'a'.charCodeAt()
      let b = equations[i][3].charCodeAt() - 'a'.charCodeAt()
      uniset.concat(a, b)
  }

  for (let i = 0; i < equations.length; i++) {
      let equ = equations[i][1]
      if (equ == '=') continue
      let a = equations[i][0].charCodeAt() - 'a'.charCodeAt()
      let b = equations[i][3].charCodeAt() - 'a'.charCodeAt()
      if (uniset.get(a) == uniset.get(b)) return false
  }
  return true
};
// @lc code=end

