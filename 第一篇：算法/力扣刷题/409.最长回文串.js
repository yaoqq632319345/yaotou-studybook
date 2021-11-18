/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let map = new Map()
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1)
  }
  // console.log(map);
  let res = 0, odd = 0;
  for (let [key, val] of map) {
    console.log(key, val);
    if (val % 2 === 0) {
      res += val
    } else {
      res += (val - 1)
      odd = 1
    }
  }
  return res + odd
};
// @lc code=end

