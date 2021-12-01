/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  let stack = []

  for (let i = 0; i < ops.length; i++) {
      switch (ops[i]) {
          case '+':
              stack.push(stack[stack.length - 1] * 1 + stack[stack.length - 2] * 1) 
              break
          case 'D':
              stack.push(stack[stack.length - 1] * 2) 
              break
          case 'C':
              stack.pop()
              break
          default:
              stack.push(ops[i] * 1)
              break

      }
  }
  let res = 0
  while (stack.length) {
      res += stack.pop()
  }
  return res
};
// @lc code=end

