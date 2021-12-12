/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
 var search = function(nums, target) {
  if (nums[0] === target) return true
  let l = 0, r = nums.length - 1, mid
  while (l < nums.length && nums[l] === nums[0]) l += 1
  while (r >= 0 && nums[r] === nums[0]) r -= 1
  // console.log(l, r)
  while (l <= r) {
      mid = (l + r) >> 1
      // console.log(mid)
      if (target === nums[mid]) return true
      if (nums[mid] <= nums[r]) {
          if (target > nums[mid] && target <= nums[r]) l = mid + 1
          else r = mid - 1
      } else {
          if (target < nums[mid] && target >= nums[l]) r = mid - 1
          else l = mid + 1
      }
  }
  return false
};
// @lc code=end

