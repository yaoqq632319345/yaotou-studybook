/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = prices[0], res = 0
  for (let i = 1; i < prices.length; i++) {
    res = Math.max(prices[i] - min, res)
    if (prices[i] < min) min = prices[i]
  }
  return res
};
// @lc code=end

