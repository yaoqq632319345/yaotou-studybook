/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
  let res = ''
  let cnt = 0, preI = 0
  for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') cnt++
      if (s[i] === ')') cnt--

      if (cnt === 0) {
          res += s.substring(preI + 1, i)
          preI = i + 1
      }
  }
  console.log(res)
  return res
};
// @lc code=end

