/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let map = new Map();
  let res = n;
  let s;
  while (res !== 1) {
    s = res + "";
    res = 0
    for (let i = 0; i < s.length; i++) {
      res += s[i] * s[i]
    }
    if (map.get(res)) {
      return false;
    } else {
      map.set(res, true);
    }
  }
  return true
};
// @lc code=end
