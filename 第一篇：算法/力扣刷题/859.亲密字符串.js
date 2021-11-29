/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  // if (s === goal) return true
  if (s.length != goal.length) return false;
  if (s === goal) {
    for (let i = 0; i < s.length; i++) {
      if (s.lastIndexOf(s[i]) != i) {
        return true;
      }
    }
    return false;
  }
  let p, q;
  for (let i = 0; i < s.length; i++) {
    if (s[i] != goal[i]) {
      if (p === undefined) {
        p = i;
      } else if (q === undefined) {
        q = i;
      } else {
        return false;
      }
    }
  }
  if (p === undefined || q === undefined) return false;
  if (s[p] === goal[q] && s[q] === goal[p]) {
    return true;
  } else {
    return false;
  }
};
// @lc code=end
