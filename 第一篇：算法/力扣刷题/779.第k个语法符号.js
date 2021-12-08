/*
 * @lc app=leetcode.cn id=779 lang=javascript
 *
 * [779] 第K个语法符号
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var kthGrammar = function(n, k) {
  if (n === 1) return 0
  let length = 2 ** (n - 1)

  if (k <= length / 2) {
      return kthGrammar(n - 1, k)
  } else {
      let val = kthGrammar(n - 1, k - length / 2) === 0 ? 1 : 0
      return val
  }
};
// @lc code=end

