/*
 * @lc app=leetcode.cn id=1319 lang=javascript
 *
 * [1319] 连通网络的操作次数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
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
var makeConnected = function(n, connections) {
  if (connections.length < n - 1) return -1
  let uniset = new UniSet(n)

  for (let i = 0; i < connections.length; i++) {
      let a = connections[i][0]
      let b = connections[i][1]
      uniset.concat(a, b)
  }
  let res = -1
  for (let i = 0; i < n; i++) {
      if (uniset.get(i) === i) res++
  }
  return res
};
// @lc code=end

