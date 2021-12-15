/*
 * @lc app=leetcode.cn id=542 lang=javascript
 *
 * [542] 01 矩阵
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  let n = mat.length, m = mat[0].length
  let res = new Array(n).fill(0).map(a => new Array(m).fill(-1))
  let que = []
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
          if (mat[i][j] === 0) {
              que.push({
                  i,
                  j,
                  k: 0
              })
              res[i][j] = 0
          }
      }
  }

  let dir = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  while (que.length) {
      let curr = que[0]
      for (let i = 0; i < dir.length; i++) {
          let x = curr.i + dir[i][0]
          let y = curr.j + dir[i][1]

          if (x < 0 || x >= n) continue
          if (y < 0 || y >= m) continue
          if (res[x][y] != -1) continue

          que.push({
              i: x,
              j: y,
              k: curr.k + 1
          })
          res[x][y] = curr.k + 1

      }
      que.shift()
  }
  return res
  console.log(que, res)
};
// @lc code=end

