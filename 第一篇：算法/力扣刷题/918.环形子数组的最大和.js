/*
 * @lc app=leetcode.cn id=918 lang=javascript
 *
 * [918] 环形子数组的最大和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
  let max = nums[0], sumMax = nums[0] // 找最大子数组
  let min = nums[0], sumMin = nums[0] // 找最小子数组

  sum = nums[0] // 所有的和

  for (let i = 1; i < nums.length; i++) {
      if (sumMax > 0) {
          sumMax += nums[i]
      } else {
          sumMax = nums[i]
      }
      max = Math.max(sumMax, max)

      if (sumMin > 0) {
          sumMin = nums[i]
      } else {
          sumMin += nums[i]
      }
      min = Math.min(sumMin, min)

      sum += nums[i]
  }
  console.log(max, min, sum)


  return Math.max(max, sum - min) // 当全是负数的时候会有问题
  return Math.max(max, sum - min === 0 ? max : sum - min)
};
// @lc code=end

