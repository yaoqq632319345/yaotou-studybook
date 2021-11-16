/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let n = cost.length
  let dp = new Array(n + 1).fill(0)

  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i-1] + cost[i - 1], dp[i-2] + cost[i - 2])
  }
  return dp[n]
}
// @lc code=end

