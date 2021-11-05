// https://leetcode-cn.com/problems/roman-to-integer/
var romanToInt = function(s) {
  let obj = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  }
  let i = s.length - 1
  let res = 0, min = 1
  while (i >= 0) {
      let num = obj[s[i]]
      if (num >= min) {
          min = num
          res += num
      } else {
          res -= num
      }
      i--
  }

  return res
};