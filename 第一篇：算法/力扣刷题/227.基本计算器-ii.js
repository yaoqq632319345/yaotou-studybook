/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let len = s.length;
  let num = "";
  let pre = "+";
  let stack = [];
  let res = 0;
  for (let i = 0; i < len; i++) {
    if (i == len - 1) {
      num += s[i];
    }
    if (["+", "-", "*", "/"].includes(s[i]) || i == len - 1) {
      num = num.trim();
      switch (pre) {
        case "+":
          stack.push(Number(num));
          break;
        case "-":
          stack.push(-Number(num));
          break;
        case "*":
          stack.push(stack.pop() * Number(num));
          console.log(stack);
          break;
        case "/":
          stack.push(parseInt(stack.pop() / Number(num)));
          break;
      }
      pre = s[i];
      num = "";
    } else {
      num += s[i];
    }
  }
  while (stack.length) {
    res += stack.pop();
  }
  return res;
};
// @lc code=end
