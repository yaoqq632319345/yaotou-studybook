/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  let stack1 = [], stack2 = []

  for (let i = 0; i < s.length; i++) {
      if (s[i] === '#' && stack1.length) {
          stack1.pop()
      } else if (s[i] != '#'){
          stack1.push(s[i])
      }
  }
  for (let i = 0; i < t.length; i++) {
      if (t[i] === '#' && stack2.length) {
          stack2.pop()
      } else if (t[i] != '#'){
          stack2.push(t[i])
      }
  }
  while (stack1.length && stack2.length) {
      if (stack1.pop() != stack2.pop()) return false
  }
  return stack1.length === stack2.length
};
// @lc code=end

