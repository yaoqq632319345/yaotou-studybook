/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  let s = []
  let res = new Array(temperatures.length).fill(0)
  for (let i = 0; i < temperatures.length; i++) {
    while (s.length && temperatures[s[s.length - 1]] < temperatures[i]) {
      let top = s.pop()
      res[top] = i - top
    }
    s.push(i)
  }
  return res
};
// @lc code=end

