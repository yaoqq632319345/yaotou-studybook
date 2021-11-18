/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length != t.length) return false;
  let maps = new Map()
    , mapt = new Map()
  
  for (let i = 0; i < s.length; i++) {
    maps.set(s[i], (maps.get(s[i]) || 0) + 1)
    mapt.set(t[i], (mapt.get(t[i]) || 0) + 1)
  }

  for (let [key, val] of maps) {
    if (mapt.get(key) !== val) {
      return false
    }
  }
  return true
  
};
// @lc code=end

