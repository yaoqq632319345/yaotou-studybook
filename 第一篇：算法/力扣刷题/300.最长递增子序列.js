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
 var searchInsert = function(nums, target) {
  let left = 0, right = nums.length - 1, mid, res = nums.length

  while (left <= right) {
    mid = (left + right) >> 1
    if (nums[mid] === target) {
      return mid
    }
    if (target < nums[mid]) {
      res = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return res
};
var lengthOfLIS = function(nums) {
  const len = nums.length
  if (len <= 1) {
    return len
  }
  const dp = [nums[0]]
  let max = 1
  for (let i = 1; i < len; i++) {
    if (nums[i] > dp[max - 1]) {
      dp[max++] = nums[i]
      continue
    }
    let index = searchInsert(dp, nums[i])

    dp[index] = nums[i]

  }
  return max
};
// @lc code=end

