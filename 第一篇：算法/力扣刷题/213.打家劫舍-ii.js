/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let len = nums.length;
  if (len === 1) return nums[0];
  let dp = [0, 0], dp2 = [0, 0] // 两个dp数组，一个从1 - len 另一个从

  for (let i = 2; i <= len; i++) {
      dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i-2])
      dp2[i] = Math.max(dp2[i-1], dp2[i-2] + nums[i-1])
  }
  console.log(dp, dp2)

  return Math.max(dp[len], dp2[len])
};
// @lc code=end

