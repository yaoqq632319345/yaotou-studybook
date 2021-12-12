/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  let l = 0, r = nums.length - 1, mid
  // console.log(l, r)
  while (l <= r) {
      mid = (l + r) >> 1
      // console.log(mid)
      if (target === nums[mid]) return mid
      if (nums[mid] <= nums[r]) {
          if (target > nums[mid] && target <= nums[r]) l = mid + 1
          else r = mid - 1
      } else {
          if (target < nums[mid] && target >= nums[l]) r = mid - 1
          else l = mid + 1
      }
  }
  return -1
};
// @lc code=end

