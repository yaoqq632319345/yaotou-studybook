// https://leetcode-cn.com/problems/reverse-string/
// 肯定不能这么简单吧
var reverseString = function(s) {
  return s.reverse()
};

var reverseString = function(s) {
  let i = 0, j = s.length - 1
  while (i < j) {
    let temp = s[i]
    s[i] = s[j]
    s[j] = temp
    i--
    j++
  }
  return s
};