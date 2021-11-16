/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let n = prices.length
  let dp = new Array(n).fill(0) // 表示每天的收益

  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i - 1] + prices[i] - prices[i - 1], dp[i - 1]) // 计算今天有没有收益
  }
  return dp[n - 1]
};
// @lc code=end

