/*
 * @lc app=leetcode.cn id=1249 lang=javascript
 *
 * [1249] 移除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  /* let stack = []
  let res = ''
  for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
          stack.push('(')
          res += s[i]
      } else if (s[i] === ')') {
          if (stack.length) {
              res += s[i]
              stack.pop()
          }
      } else {
          res += s[i]
      }
  }
  let finRes = ''
  for (let i = res.length - 1; i >= 0; i--) {
      if (res[i] === '(' && stack.length) {
          stack.pop()
      } else {
          finRes = res[i] + finRes
      }
  }
  return finRes */

  let t = ''
  let cnt = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') cnt++;
    if (s[i] === ')') cnt--;
    if (cnt >= 0) t += s[i]
    else cnt = 0
  }

  s = '';
  cnt = 0
  for (let i = t.length - 1; i >= 0; i--) {
    if (t[i] === ')') cnt++
    if (t[i] === '(') cnt--
    if (cnt >= 0) s = t[i] + s
    else cnt = 0
  }
  return s
};
// @lc code=end

minRemoveToMakeValid('))((')