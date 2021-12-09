/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let len = nums.length

  let dp = [nums[0]]

  for (let i = 1; i < len; i++) {
      if (nums[i] > dp[dp.length - 1]) { // 如果比dp最后一位大，直接插入
          dp.push(nums[i])
          continue
      }
      // 否则二分查找替换掉
      let left = 0
          , right = dp.length - 1
          , mid
          , pos = 0
      while (left <= right) {
          mid = (left + right) >> 1
          if (nums[i] > dp[mid]) {
              left = mid + 1
              pos = mid + 1
          } else {
              right = mid - 1
              pos = mid
          }
      }
      dp[pos] = nums[i]
  }
  return dp.length
};
// @lc code=end

