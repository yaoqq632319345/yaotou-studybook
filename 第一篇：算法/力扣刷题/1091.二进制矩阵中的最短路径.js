/*
 * @lc app=leetcode.cn id=1091 lang=javascript
 *
 * [1091] 二进制矩阵中的最短路径
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
  let n = grid.length
  if (grid[0][0] || grid[n-1][n-1]) return -1
  let dir = [
      [0, 1],
      [0, -1],
      [1, 0],
      [1, -1],
      [1, 1],
      [-1, 0],
      [-1, -1],
      [-1, 1]
  ]
  let has = new Array(n).fill(0).map(x => new Array(n).fill(0))
  has[0][0] = 1
  let que = [{
      i: 0,
      j: 0,
      k: 1
  }]
  while (que.length) {
      let curr = que[0]
      if (curr.i == n - 1 && curr.j == n - 1) return curr.k

      for (let i = 0; i < dir.length; i++) {
          let x = curr.i + dir[i][0]
          let y = curr.j + dir[i][1]
          if (x < 0 || x >= n) continue
          if (y < 0 || y >= n) continue
          if (grid[x][y] === 1) continue
          if (has[x][y]) continue
          has[x][y] = 1

          que.push({
              i: x,
              j: y,
              k: curr.k + 1
          })
      }
      que.shift()
  }
  return -1
};
// @lc code=end

