/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
 class Uni_set {
  constructor (n) {
      this.arr = new Array(n)
      for (let i = 0; i < n; i++) {
          this.arr[i] = i
      }
  }
  get (a) {
      return this.arr[a] = (this.arr[a] === a ? a : this.get(this.arr[a]))
  }
  concat (a, b) {
      if (a === b) return
      this.arr[this.get(a)] = this.get(b)
  }
}
var findCircleNum = function(isConnected) {
  let uni_set = new Uni_set(isConnected.length)
  // console.log(uni_set)
  for (let i = 0; i < isConnected.length; i++) {
      for (let j = 0; j < isConnected[i].length; j++) {
          if (isConnected[i][j]) {
              uni_set.concat(i, j)
          }
      }
  }

  let cnt = 0
  for (let i = 0; i < uni_set.arr.length; i++) {
      if (uni_set.arr[i] === i) cnt++
  }
  return cnt
};
// @lc code=end

