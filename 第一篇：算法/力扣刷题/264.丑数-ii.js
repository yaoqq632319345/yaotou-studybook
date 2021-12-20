/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
 var nthUglyNumber = function(n) {
  let res = [1]
  let p1 = 0, p2 = 0, p3 = 0
  for (let i = 1; i < n; i++) {
      let v1 = res[p1] * 2
          , v2 = res[p2] * 3
          , v3 = res[p3] * 5
      res.push(Math.min(v1, v2, v3))
      if (v1 === res[i]) p1 ++
      if (v2 === res[i]) p2 ++
      if (v3 === res[i]) p3 ++
  }
  return res[n - 1]
};
// @lc code=end

