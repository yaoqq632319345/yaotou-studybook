/*
 * @lc app=leetcode.cn id=1753 lang=javascript
 *
 * [1753] 移除石子的最大得分
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function(a, b, c) {
  if (a > b) [a, b] = [b, a]
  if (b > c) [b, c] = [c, b]
  if (a > c) [a, c] = [c, a]
  // console.log(a, b, c)

  let res = 0

  res += Math.min(a, c - b)
  a -= res
  c -= res

  if (a > 0) {
    res += (a + b + c) >> 1
  } else {
    res += Math.min(b, c)
  }
  return res
};
// @lc code=end

