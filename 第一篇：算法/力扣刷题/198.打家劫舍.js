/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let len = nums.length;
  let dp = [0]; // dp数组存放，当前房屋数量的最优解
  for (let i = 1; i <= len; i++) { // 遍历所有房屋
    /**
     * 当前房屋的两种状态
     * 1.偷当前房屋，就是dp[i-2] + 当前房屋
     * 2.不偷当前房屋就是 dp[i-1]
     * 两者比大小
     */
    dp[i] = Math.max(nums[i-1]+dp[i-2], dp[i-1])
  }
  return dp[len]
  
};

// 由于dp[i-2]数组越界  优化之后的代码
var rob = function(nums) {
  let len = nums.length;
  let dp = [0, 0]; // dp数组存放，当前房屋数量的最优解
  for (let i = 2; i <= len + 1; i++) { // 遍历所有房屋
    /**
     * 当前房屋的两种状态
     * 1.偷当前房屋，就是dp[i-2] + 当前房屋
     * 2.不偷当前房屋就是 dp[i-1]
     * 两者比大小
     */
    dp[i] = Math.max(nums[i-2]+dp[i-2], dp[i-1])
  }
  return dp[len + 1]
  
};
// @lc code=end

