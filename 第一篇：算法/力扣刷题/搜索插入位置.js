// https://leetcode-cn.com/problems/search-insert-position/submissions/
var searchInsert = function(nums, target) {
  let i = 0
  for (; i < nums.length; i++) {
      if (nums[i] === target) return i
      if (nums[i] > target) return i
  }
  return i
};