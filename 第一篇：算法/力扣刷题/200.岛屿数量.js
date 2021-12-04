/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
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
var numIslands = function(grid) {
  let m = grid.length, n = grid[0].length;

  function getIdx (i, j) {
      return i * n + j
  }
  let uniset = new UniSet(m * n)

  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (grid[i][j] == '0') continue

          if (i > 0 && grid[i - 1][j] == '1') uniset.concat(getIdx(i, j), getIdx(i - 1, j))
          if (j > 0 && grid[i][j - 1] == '1') uniset.concat(getIdx(i, j), getIdx(i, j - 1))
      }
  }
  // console.log(uniset)
  let res = 0
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          // console.log(grid[i][j], uniset.get(getIdx(i, j)), getIdx(i, j))
          if (grid[i][j] == '1' && uniset.get(getIdx(i, j)) == getIdx(i, j)) res++
      }
  }
  return res
};
// @lc code=end

