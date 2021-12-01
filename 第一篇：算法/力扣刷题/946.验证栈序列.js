/*
 * @lc app=leetcode.cn id=946 lang=javascript
 *
 * [946] 验证栈序列
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  let stack = [], j = 0;
  for (let i = 0; i < popped.length; i++) {
      while (stack[stack.length - 1] != popped[i] && j < pushed.length) {
          stack.push(pushed[j])
          j++;
      }
      if (stack.pop() !== popped[i]) return false
  }
  return true
};
// @lc code=end

