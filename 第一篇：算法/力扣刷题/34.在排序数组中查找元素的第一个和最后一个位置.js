/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 function search (nums, target) {
  let l = 0, r = nums.length - 1, mid;
  while (r - l > 3) {
      mid = (l + r) >> 1

      if (nums[mid] >= target) r = mid
      else l = mid + 1
  }
  // console.log(l, r)
  for (let i = l; i <= r; i++) {
      if (nums[i] >= target) return i
  }
  return nums.length
}
var searchRange = function(nums, target) {
  
  let res = new Array(2).fill(-1)

  res[0] = search(nums, target)
  if (res[0] === nums.length || nums[res[0]] != target) return [-1, -1]
  res[1] = search(nums, target + 1) - 1
  return res
};
// @lc code=end

