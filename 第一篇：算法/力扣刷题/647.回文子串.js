/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
  function check (str) {
      let i = 0, j = str.length - 1
      while(i<=j) {
          if (str[i] !== str[j]) {
              return false
              break
          }
          i++;
          j--;
      }
      return true
  }
  let res = s.length
  for (let i = 0; i < s.length - 1; i++) {
      let str = s[i]
      for (let j = i + 1; j < s.length; j++) {
          str += s[j]
          if (check(str)) res++
      }
  }

  return res
};
// @lc code=end

